# W: Unsupervised training (single-dataset)

## Brief description
Create unsupervised model and a set of figures.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use to help identify object.

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

### **Masks** (`type` - array)

Masks to use during training - this will exclude all pixels from outside of the area during the training process. If multiple masks are specified, they will be combined.

### **Iterate over no. of components/clusters** (`type` - boolean)

Test several number of clusters ranging from 3 to the value defined in the 'Number of components/clusters'.

### **No. of components/clusters [all]** (`type` - integer)

Number of components to use.  If the value is 0, number of components will be identical to the number of features. '0' can only be used for PCA and NMF. The other methods will raise an error.

### **Distance metric [UMAP]** (`type` - string)

Distance metric to use for clustering.

### **No. of neighbors [UMAP]** (`type` - integer)

Number of neighbors to use for clustering.

### **Minimum distance [UMAP]** (`type` - number)

Minimum distance to use for clustering.

### **Perplexity [tSNE]** (`type` - integer)

Perplexity - balance between preserving the global and local structure of the data.

### **Exaggeration [tSNE]** (`type` - number)

Exaggeration - used to increase the attractive forces between points.

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

Type of output of the unsupervised data




## Dependencies (other tasks that this task might depend on)
| Depends on                                                                             | Required/Optional   |
|----------------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)          | required            |
| [W: Extract ion centroids (subset-project)](wf_mz_extract_centroids_subset.md)         | required            |
| [P: Normalization (single-dataset)](pre_normalization_single.md)                       | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)                         | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)                      | optional            |
| [P: Register GeoJSON masks from QuPath (single-dataset)](pre_geojson_registration.md)  | optional            |
| [P: Register image2image HDF5 masks (single-dataset)](pre_image2image_registration.md) | optional            |



## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |