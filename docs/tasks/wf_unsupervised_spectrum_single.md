# W: Average mass spectrum / cluster (single-dataset)

## Brief description
Generate average mass spectrum per K-Means cluster.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use to help identify object.

### **Unsupervised tag** (`type` - array)

Tag of the unsupervised/clustering object when extracting the mass spectrum.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.




## Dependencies (other tasks that this task might depend on)
| Depends on                                                        | Required/Optional   |
|-------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)  | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)    | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md) | optional            |

## Dependents (tasks that might depend on this task)
| Dependants                                                                              | Required/Optional   |
|-----------------------------------------------------------------------------------------|---------------------|
| [P: Mass calibration (single-dataset)](pre_mz_calibrate.md)                             | required            |
| [W: M/z feature detection (single-dataset)](wf_mz_detect_single.md)                     | required            |
| [W: M/z feature detection (multi-dataset)](wf_mz_detect_multi.md)                       | required            |
| [W: Compare spectra (interactive, multi-dataset)](wf_compare_mz_spectra_interactive.md) | required            |
| [W: Compare spectra (one-vs-one; single-dataset)](wf_compare_mz_spectra_single_grid.md) | required            |
| [W: Compare spectra (one-vs-one; multi-dataset)](wf_compare_mz_spectra_grid.md)         | required            |
| [W: Annotate mass spectra (single-dataset)](wf_mz_annotate_single.md)                   | required            |
| [W: Annotate mass spectrum (multi-dataset)](wf_mz_annotate_multi.md)                    | required            |
| [W: Annotate average mass spectrum (merged-project)](wf_mz_annotate_project.md)         | required            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |