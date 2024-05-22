# P: Tags and names (single-dataset)

## Brief description
Add alias for the dataset(s) and provide tags, conditions, etc. Dataset names are usually not very pretty so this task allows you to rename them to something more meaningful. You can also provide additional information such as whether sample is healthy or diseased, what conditions were used (e.g. matrix, solvent, etc.).

## Parameters
| Field             | Type   | Description                                                                          |
|-------------------|--------|--------------------------------------------------------------------------------------|
| Tag/tags filename | string | Filename of CSV file containing tag/alias and tags for each or some of the datasets. |







## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | False   | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | False   | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |