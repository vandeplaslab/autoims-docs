# P: Select datasets into a subset (subset-dataset)

## Brief description
Select datasets into a subset so certain analyses can be performed only on the specified set of datasets. Subsets are distinct from merged datasets and can be used in parallel with them.

## Parameters
| Field              | Type   | Description                                  |
|--------------------|--------|----------------------------------------------|
| Subset of datasets | array  | Subset of datasets selected for annotation.. |
| Subset name        | string | Name to be given to the subset of datasets.  |





## Dependents (tasks that might depend on this task)
| Dependants                                                                      | Required/Optional   |
|---------------------------------------------------------------------------------|---------------------|
| [P: Normalization (merged-project)](pre_normalization_project.md)               | required            |
| [W: Supervised training (merged-project)](wf_supervised_project.md)             | required            |
| [W: Unsupervised training (merged-project)](wf_unsupervised_project.md)         | required            |
| [W: Annotate average mass spectrum (merged-project)](wf_mz_annotate_project.md) | required            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |