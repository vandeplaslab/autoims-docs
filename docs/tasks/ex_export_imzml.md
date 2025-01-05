# E: Dataset to imzML (single-dataset)

## Brief description
Export data in imzML file format.

## Parameters
### **Method** (`type` - string)

Method to use for export.

### **SNR** (`type` - number)

Signal-to-noise. Only used if 'method='parabolic'

### **Threshold** (`type` - number)

Threshold for peak detection. Only used if 'method=picked'

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **Export unprocessed dataset** (`type` - boolean)

In addition of exporting fully processed dataset (e.g. aligned, calibrated), also export the unprocessed data. Good for archiving purposes or reporting.

!!! warning
    Unprocessed imzML files are files that have not been processed by e.g. mass alignment, mass calibration or<br> normalization. These are often not required but can be helpful if you want to share the 'raw' data in<br>vendor neutral format.



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