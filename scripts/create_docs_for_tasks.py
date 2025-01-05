"""These scripts automatically generate the documentation for the tasks in the task folder.

This works by taking a template .md file and filling the blanks with information contained within the task files.
"""

from pathlib import Path

from tabulate import tabulate
from tqdm import tqdm

from autoims.config.tasks import (
    ALL_CONFIGS,
    OPTIONAL_DEPENDANTS_MAP,
    REQUIRED_DEPENDANTS_MAP,
    SECTION_ORDER,
    TaskConfig,
    field_iter,
    get_title_from_task_name,
)

DOCS_DIR = Path(__file__).parent.parent.parent / "autoims-docs"
print(f"DOCS_DIR: {DOCS_DIR}")
TEMPLATE_DIR = DOCS_DIR / "docs" / "_templates"
print(f"TEMPLATE_DIR: {TEMPLATE_DIR}")
# TASKS_SOURCE_DIR = DOCS_DIR / "docs" / "_tasks_source"
# print(f"TASKS_SOURCE_DIR: {TASKS_SOURCE_DIR}")
TASKS_DIR = DOCS_DIR / "docs" / "tasks"
print(f"TASKS_DIR: {TASKS_DIR}")
MK_TEMPLATE_YML = DOCS_DIR / "mkdocs-template.yml"
MK_YML = DOCS_DIR / "mkdocs.yml"


ATTRIBUTE_NAME = {
    "allow_multiple": "Multiple allowed",
    "ion_mobility": "Requires ion mobility",
    "ion_mobility_optional": "Task can fail (with ion mobility)",
    "optional": "Task can fail",
    "step_can_fail": "Step can fail",
    "allow_in_ref": "Allowed in reference dataset",
}

ATTRIBUTE_DESCRIPTION = {
    "allow_multiple": "Allow multiple instances of this task in a workflow.",
    "ion_mobility": "Task requires ion mobility data.",
    "ion_mobility_optional": "This task uses ion mobility data but it is allowed to fail, without causing the entire"
    " workflow to fail.",
    "optional": "Task is optional and can fail without causing the entire workflow to fail.",
    "step_can_fail": "Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.",
    "allow_in_ref": "Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be"
    " performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**).",
    "grid_params": "A grid of parameters can be created for this task, automatically resulting in multiple instances"
    " of the task (**unused at the moment**)",
}


def update_mkdocs_nav() -> None:
    """Create mkdocs navigation based on task name(s)."""
    res = {k: [] for k in SECTION_ORDER}
    with tqdm(ALL_CONFIGS, desc="Creating docs") as pbar:
        for task in ALL_CONFIGS:
            task_name = task.task_name
            title = task.title[3:]
            try:
                res[task.section].append(f"{title}: tasks/{task_name}.md")
            except KeyError:
                print(f"Unknown category: {title} for {task.section}")
            pbar.update(1)
    # create the nav
    out = []
    for key, value in res.items():
        out.append(f"    - {key}:")
        for v in value:
            out.append(f"        - {v}")
    out = "\n".join(out)
    # (TEMPLATE_DIR / "nav-template.txt").write_text(out)
    MK_YML.write_text(MK_TEMPLATE_YML.read_text().replace("{{ TASKS_NAV }}", out))
    print(out)


def make_docs() -> None:
    """Create docs."""
    TASKS_DIR.mkdir(exist_ok=True, parents=True)

    # clear the tasks directory
    for file in TASKS_DIR.iterdir():
        file.unlink()

    # # copy tasks from source to tasks directory
    # for file in TASKS_SOURCE_DIR.iterdir():
    #     file_name = file.name
    #     file_dest = TASKS_DIR / file_name
    #     file_dest.write_text(file.read_text())

    # create task templates
    template = TEMPLATE_DIR / "task-template.md"
    with tqdm(ALL_CONFIGS, desc="Creating docs") as pbar:
        for task in ALL_CONFIGS:
            pbar.set_postfix_str(task.task_name)
            filename = TASKS_DIR / f"{task.task_name}.md"

            template_text = template.read_text()
            # replace title
            out = template_text.replace("{{ TASK_TITLE }}", f"# {task.title}")
            # replace description
            out = out.replace(
                "{{ TASK_SHORT_DESCRIPTION }}", f"## Brief description\n{task.info}"
            )
            # replace parameter table
            out = insert_parameters_table(out, task)
            out = insert_more_information(out, task)
            # add dependencies
            out = insert_dependencies(out, task)
            # add dependants
            out = insert_dependants(out, task)
            # add attributes
            out = insert_attributes_table(out, task)

            # write to file
            filename.write_text(out)
            del out
            pbar.update(1)


def insert_parameters_table(out: str, task: TaskConfig) -> str:
    """Return a formatted table for the parameters of a task."""
    # parameters = get_table_for_parameters(task)
    parameters = get_table_for_parameters_alt(task)
    if parameters:
        return out.replace(
            "{{ TASK_PARAMETERS_TABLE }}", f"## Parameters\n{parameters}"
        )
    return out.replace("{{ TASK_PARAMETERS_TABLE }}", "")


def get_table_for_parameters(task: TaskConfig) -> str:
    """Return formatted table for parameters of all available fields of a specified task.

    The formatting should be such that it's displayed properly by the markdown renderer.
    """
    out = []
    for _field_name, _field, schema in field_iter(task):
        try:
            if "type" in schema:
                out.append([schema["title"], schema["type"], schema["description"]])
            elif "enum" in schema:
                out.append([schema["title"], "enum", schema["description"]])
            elif "anyOf" in schema:
                out.append(
                    [schema["title"], schema["anyOf"][0]["type"], schema["description"]]
                )
            else:
                out.append([schema["title"], "unknown", schema["description"]])
        except KeyError:
            print(f"WARNING: Failed on field: {schema}")
    if out:
        return tabulate(  # type: ignore[no-any-return]
            out,
            headers=["Field", "Type", "Description"],
            tablefmt="github",
        )
    return ""


def get_table_for_parameters_alt(task: TaskConfig) -> str:
    """Return formatted table for parameters of all available fields of a specified task.

    The formatting should be such that it's displayed properly by the markdown renderer.
    """
    out = []
    for _field_name, _field, schema in field_iter(task):
        try:
            title = schema["title"]
            description = schema["description"]
            if "type" in schema:
                type_ = schema["type"]
            elif "enum" in schema:
                type_ = "enum"
            elif "anyOf" in schema:
                type_ = schema["anyOf"][0]["type"]
            else:
                type_ = "unknown"
            out.append(f"### **{title}** (`type` - {type_})\n")
            out.append(f"{description}\n")
            if "help" in schema:
                out.append(f"!!! help\n    {schema['help']}")
            if "warning" in schema:
                out.append(f"!!! warning\n    {schema['warning']}")
        except KeyError:
            print(f"WARNING: Failed on field: {schema}")
    if out:
        return "\n".join(out)
    return ""


def insert_attributes_table(out: str, task: TaskConfig) -> str:
    """Insert attributes."""
    attributes = get_table_for_attributes(task)
    if attributes:
        return out.replace(
            "{{ TASK_ATTRIBUTES_TABLE }}", f"## Attributes\n{attributes}"
        )
    return out.replace("{{ TASK_ATTRIBUTES_TABLE }}", "")


def get_table_for_attributes(task: TaskConfig) -> str:
    """Attributes."""
    out = []
    for attribute in [
        "allow_multiple",
        "optional",
        "step_can_fail",
        "ion_mobility",
        "ion_mobility_optional",
        "allow_in_ref",
        # "in_grid",
    ]:
        out.append(
            [
                ATTRIBUTE_NAME[attribute],
                getattr(task, attribute),
                ATTRIBUTE_DESCRIPTION[attribute],
            ]
        )
    if out:
        return tabulate(  # type: ignore[no-any-return]
            out,
            headers=["Attribute", "Value", "Description"],
            tablefmt="github",
        )
    return ""


def insert_more_information(out: str, task: TaskConfig) -> str:
    """Return a list of dependencies for a task."""
    more_info = task.more_info
    template_for_task = TEMPLATE_DIR / f"{task.task_name}-template.md"
    if template_for_task.exists():
        more_info_from_file = template_for_task.read_text()
        if more_info:
            more_info = f"{more_info}\n\n{more_info_from_file}"
        else:
            more_info = more_info_from_file
    if more_info:
        more_info = f"## More Information\n{more_info}"
    out = out.replace("{{ TASK_MORE_INFO }}", more_info)
    return out


def insert_dependants(out: str, task: TaskConfig) -> str:
    """Return a list of dependencies for a task."""
    dependants_str = ""
    table = []
    for source, dependants in REQUIRED_DEPENDANTS_MAP.items():
        if task.task_name in source:
            for dependant in dependants:
                title = get_title_from_task_name(dependant)
                table.append([f"[{title}]({dependant}.md)", "required"])
    for source, dependants in OPTIONAL_DEPENDANTS_MAP.items():
        if task.task_name in source:
            for dependant in dependants:
                title = get_title_from_task_name(dependant)
                table.append([f"[{title}]({dependant}.md)", "optional"])
    if table:
        table_ = tabulate(  # type: ignore[no-any-return]
            table,
            headers=["Dependants", "Required/Optional"],
            tablefmt="github",
        )
        dependants_str = (
            f"## Dependents (tasks that might depend on this task)\n{table_}"
        )
    out = out.replace("{{ TASK_DEPENDANTS }}", dependants_str)
    return out


def insert_dependencies(out: str, task: TaskConfig) -> str:
    """Return a list of dependencies for a task."""
    dependencies_str = ""
    table = []
    for source, dependants in REQUIRED_DEPENDANTS_MAP.items():
        if task.task_name in dependants:
            for dependant in source:
                title = get_title_from_task_name(dependant)
                table.append([f"[{title}]({dependant}.md)", "required"])
    for source, dependants in OPTIONAL_DEPENDANTS_MAP.items():
        if task.task_name in dependants:
            for dependant in source:
                title = get_title_from_task_name(dependant)
                table.append([f"[{title}]({dependant}.md)", "optional"])
    if table:
        table_ = tabulate(  # type: ignore[no-any-return]
            table,
            headers=["Depends on", "Required/Optional"],
            tablefmt="github",
        )
        dependencies_str = (
            f"## Dependencies (other tasks that this task might depend on)\n{table_}"
        )
    out = out.replace("{{ TASK_DEPENDENCIES }}", dependencies_str)
    return out


if __name__ == "__main__":
    make_docs()
    update_mkdocs_nav()
