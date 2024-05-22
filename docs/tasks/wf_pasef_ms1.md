# W: Process PASEF-MS1 imaging data (single-dataset)

## Brief description
Parse PASEF imaging data and export data.

## Parameters
| Field              | Type    | Description                                            |
|--------------------|---------|--------------------------------------------------------|
| MS1 tag            | string  | Tag (glob pattern) to recognize the MS1 dataset by.    |
| MS2 tag            | string  | Tag (glob pattern) to recognize the MS2 dataset(s) by. |
| Normalization tag  | string  | Tag to use for normalization.                          |
| Normalization name | string  | Name of the normalization.                             |
| Plot style         | array   | Style of the generated figures.                        |
| Colormap           | string  | Colormap to use for the image.                         |
| DPI                | integer | DPI of the image.                                      |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                        | Required/Optional   |
|-------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)  | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)    | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md) | optional            |



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