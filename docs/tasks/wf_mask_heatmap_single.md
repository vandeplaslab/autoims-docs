# W: Average ion mobility heatmap / mask (single-dataset)

## Brief description
Generate average ion mobility heatmap per mask (this task will also automatically generate an average mass spectrum). Masks must be provided in the extra's sub-directory.

## Parameters
### **Mask tag** (`type` - array)

Tag or name of the mask to be used as the input mask.

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
| Dependants                                                                   | Required/Optional   |
|------------------------------------------------------------------------------|---------------------|
| [W: Ion mobility feature detection (single-dataset)](wf_im_detect_single.md) | required            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |