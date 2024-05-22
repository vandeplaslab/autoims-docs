# P: Register image2image HDF5 masks (single-dataset)

## Brief description
Register HDF5 masks from image2image. These masks can be used to extract average mass spectra, ion mobility heatmaps or in supervised training. Name you masks appropriately as the name will be used as the class name.







## Dependents (tasks that might depend on this task)
| Dependants                                                              | Required/Optional   |
|-------------------------------------------------------------------------|---------------------|
| [W: Supervised training (single-dataset)](wf_supervised_single.md)      | required            |
| [W: Supervised training (merged-project)](wf_supervised_project.md)     | required            |
| [W: Unsupervised training (single-dataset)](wf_unsupervised_single.md)  | optional            |
| [W: Unsupervised training (merged-project)](wf_unsupervised_project.md) | optional            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | False   | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |