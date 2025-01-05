# W: Group statistics of ion centroids (multi-dataset)

## Brief description
Compute ion statistics such as p- and q-values, volcano plots, and many other metrics across groups. This will calculate 'group' statistics to give you an idea of 'significant' features across conditions.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use to help identify object.

### **Centroid tag** (`type` - string)

Tag to use for the object.

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

### **Mask** (`type` - string)

Mask to use for subsampling the data. By default, all pixels will be used for the analysis, otherwise the mask will be used to subsample the data.

### **Reduce method** (`type` - string)

The method to use for reducing the multi-entry data into a single value. For example. if there are several entries for a single m/z, they need to be simplified to calculate boostrap statistics.

### **Image reduce method** (`type` - string)

The method used to reduce the amount of image information. By default, each pixel is represented by a single value for each m/z, however, in order to calculate the image statistics, the image must be simplified to a single value. There are a number of methods available for this purpose.




## Dependencies (other tasks that this task might depend on)
| Depends on                                                                     | Required/Optional   |
|--------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)  | required            |
| [W: Extract ion centroids (subset-project)](wf_mz_extract_centroids_subset.md) | required            |
| [P: Normalization (single-dataset)](pre_normalization_single.md)               | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)                 | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)              | optional            |



## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |