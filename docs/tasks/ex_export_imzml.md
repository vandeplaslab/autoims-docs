# E: Dataset to imzML (single-dataset)

## Brief description
Export data in imzML file format.

## Parameters
| Field                      | Type    | Description                                                                                                                                              |
|----------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method                     | string  | Method to use for export.                                                                                                                                |
| SNR                        | number  | Signal-to-noise. Only used if 'method='parabolic'                                                                                                        |
| Threshold                  | number  | Threshold for peak detection. Only used if 'method=picked'                                                                                               |
| Normalization tag          | string  | Tag to use for normalization.                                                                                                                            |
| Normalization name         | string  | Name of the normalization.                                                                                                                               |
| Export unprocessed dataset | boolean | In addition of exporting fully processed dataset (e.g. aligned, calibrated), also export the unprocessed data. Good for archiving purposes or reporting. |



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
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |