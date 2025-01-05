# W: Compare spectra (one-vs-one; single-dataset)

## Brief description
Compare mass spectra from within a single dataset.

## Parameters
### **m/z min** (`type` - number)

Minimum m/z.

### **m/z max** (`type` - number)

Maximum m/z.

### **Plot style** (`type` - array)

Style of the generated figures.

### **Color palette** (`type` - string)

Color palette to use to colorize mass spectra.

### **Line width** (`type` - number)

Line width.

### **DPI** (`type` - integer)

DPI of the image.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.




## Dependencies (other tasks that this task might depend on)
| Depends on                                                                                | Required/Optional   |
|-------------------------------------------------------------------------------------------|---------------------|
| [P: Average mass spectrum (single-dataset)](pre_average_spectrum.md)                      | required            |
| [W: Average mass spectrum / mask (single-dataset)](wf_mask_spectrum_single.md)            | required            |
| [W: Average mass spectrum / cluster (single-dataset)](wf_unsupervised_spectrum_single.md) | required            |



## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |