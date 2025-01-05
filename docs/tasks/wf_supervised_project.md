# W: Supervised training (merged-project)

## Brief description
Train a classification model on the data.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use to help identify object.

### **Merged project** (`type` - array)

Merged project to use for training. If not specified, all projects will be used.

### **Algorithm** (`type` - string)

Algorithm to use for training.

### **Centroid tag** (`type` - string)

Tag to use for the object.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **Balance scheme** (`type` - string)

Scheme to use for balancing the data.

!!! help
    This option determines how the data will be balanced. This is occasionally necessary if one class is extremely unbalanced (there are more pixels of that specific class). If you are using:<br><b>none</b> - data will not be balanced.<br><b>auto</b> - data will be balanced by subsampling the overpopulated classes and oversampled the underpopulated classes.<br><b>equal</b> - data will be balanced using the same number of pixels determined by the class with the fewest members. Pixels are randomly sampled from the overpopulated classes.<br><b>random</b> - data will be balanced by randomly sampling the same number of pixels from each class. The underpopulated classes will be oversampled.
### **Classification type** (`type` - string)

Type of classification to perform.

!!! help
    This option determines the type of classification that will be performed. If you are using:<br><b>binary</b> - a grid of all possible binary combinations will be generated.<br><b>multi</b> - all masks will be used as a separate class in classification training.<br><b>invert</b> - each mask will be used as a <b>positive</b> mask and the inverse of that mask will be used as the <b>negative</b> mask.
### **Positive mask** (`type` - string)

Mask to use for the positive class. If not specified, the mask will be automatically determined.

### **Negative mask** (`type` - array)

Mask to use for the positive class. If not specified, the mask will be automatically determined.

### **Multiple masks** (`type` - array)

Masks to use for training of the classification model. Different scenarios are possible, depending on the classification type that was selected.

### **Optimize hyper-parameters** (`type` - boolean)

Optimize hyper-parameters by executing a grid-search.

!!! warning
    You shouldn't enable this option unless the default parameters are not delivering good results. This<br> can be a time-consuming process (many hours), especially if there is a lot of data to crunch through.
### **No. of components [LDA]** (`type` - integer)

Number of components to use for linear model fitting.

### **No. of estimators [RF/XGB]** (`type` - integer)

No. of estimators to use for training.

### **Max. depth [RF/XGB]** (`type` - integer)

Maximum depth of the tree.

### **Inter-normalization** (`type` - boolean)

Inter-normalization.

### **Batch normalization** (`type` - boolean)

Batch normalization.

### **Colormap** (`type` - string)

Colormap to use for the image.

### **Plot style** (`type` - array)

Style of the generated figures.

### **DPI** (`type` - integer)

DPI of the image.

### **Auto-rotate images** (`type` - boolean)

Automatically rotate images that are taller than they are wider.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.

### **Export to file** (`type` - array)

Type of output of the supervised data




## Dependencies (other tasks that this task might depend on)
| Depends on                                                                             | Required/Optional   |
|----------------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)          | required            |
| [W: Extract ion centroids (subset-project)](wf_mz_extract_centroids_subset.md)         | required            |
| [P: Register GeoJSON masks from QuPath (single-dataset)](pre_geojson_registration.md)  | required            |
| [P: Register image2image HDF5 masks (single-dataset)](pre_image2image_registration.md) | required            |
| [P: Create merged project based on tags (merged-dataset)](pre_merge_datasets.md)       | required            |
| [P: Normalization (single-dataset)](pre_normalization_single.md)                       | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)                         | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)                      | optional            |



## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |