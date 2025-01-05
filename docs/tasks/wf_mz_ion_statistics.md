# W: Group statistics of mass spectra (multi-dataset)

## Brief description
Compute ion statistics such as p- and q-values, volcano plots, and many other metrics across groups. This will calculate 'group' statistics to give you an idea of 'significant' features across conditions.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use to help identify object.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **Include tags** (`type` - array)

Tags to use for comparisons.

### **No. of bootstrap samples** (`type` - integer)

Number of bootstrap samples to use for p-value estimation.

### **Plot style** (`type` - array)

Style of the generated figures.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.

### **m/zs** (`type` - array)

M/z values.

### **Filename** (`type` - string)

Path to peaklist file.

### **Mask** (`type` - string)

Mask to use for sampling the input data. If a mask is not specified, an equally spaced selection of pixels will be used to calculate the statistics. If a mask is specified, a random subset of pixels will be used to calculate the statistics.

### **No. of spectral samples** (`type` - integer)

Number of spectral samples when accumulating ion statistics. Value of 1 means that the average spectrum is used.

### **Neighbourhood radius** (`type` - integer)

Radius to use for the neighbourhood. Value of 0 means that the current pixel is used. Value of 1 means that the current pixel and its 8 neighbours are used, 2 means that the current pixel and its 24, etc.

### **Reduce method** (`type` - string)

The method to use for reducing the multi-entry data into a single value. For example. if there are several entries for a single m/z, they need to be simplified to calculate boostrap statistics.

### **Collection method** (`type` - string)

Determines how data should be collected for the list of m/zs. Each method has its advantages and disadvantages.<br><b>centroid</b> - use single centroid entry for each m/z<br><b>centroid_integrated</b> - use integrated centroid entry for each m/z using the ppm tolerance<br><b>detected</b> - use all detected entries for each m/z<br><b>direct</b> - use all direct entries for each m/z<br><b>direct_integrated</b> - use integrated direct entries for each m/z using the ppm tolerance

### **Integration ppm** (`type` - number)

ppm tolerance for integration.




## Dependencies (other tasks that this task might depend on)
| Depends on                                                                   | Required/Optional   |
|------------------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)             | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)               | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)            | optional            |
| [W: M/z feature detection (single-dataset)](wf_mz_detect_single.md)          | optional            |
| [W: M/z feature detection (multi-dataset)](wf_mz_detect_multi.md)            | optional            |
| [W: Ion mobility feature detection (single-dataset)](wf_im_detect_single.md) | optional            |



## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |