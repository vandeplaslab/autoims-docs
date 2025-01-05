# W: Compare mosaic images (multi-dataset)

## Brief description
Generate mosaic images for all datasets.

## Parameters
### **Centroid tag** (`type` - string)

Tag to use for the object.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **Clip hotspots** (`type` - boolean)

Clip image intensities to increase image contrast.

### **Quantile** (`type` - boolean)

Use quantile normalization - only used if the `Normalization tag` is not specified.

### **Common intensity** (`type` - boolean)

Use common intensity across multiple datasets.

### **No. of most abundant** (`type` - integer)

Number of most intense features to use. If 'value=0' then all features will be used.

### **One directory** (`type` - boolean)

Save all images in one directory.

### **Merge by m/z** (`type` - boolean)

Mosaic of each m/z for all datasets should be created.

### **No. of columns (by m/z)** (`type` - integer)

Number of columns for m/z images.

### **Merge by dataset** (`type` - boolean)

Mosaic of images of each dataset should be created.

### **No. of columns (by dataset)** (`type` - integer)

Number of columns for dataset images.

### **Colorbar** (`type` - boolean)

Add colorbar to the image.

### **Colormap** (`type` - string)

Colormap to use for the image.

### **DPI** (`type` - integer)

DPI of the image.

### **Auto-rotate images** (`type` - boolean)

Automatically rotate images that are taller than they are wider.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.




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