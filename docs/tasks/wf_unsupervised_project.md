# W: Unsupervised training (merged-project)

## Brief description
Create unsupervised model and suite of figures.

## Parameters
| Field                                      | Type    | Description                                                                                                                                                                                     |
|--------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tag (identifier)                           | string  | Tag to use to help identify object.                                                                                                                                                             |
| Merged project                             | array   | Merged project to use for training. If not specified, all projects will be used.                                                                                                                |
| Algorithm                                  | string  | Algorithm to use for training.                                                                                                                                                                  |
| Centroid tag                               | string  | Tag to use for the object.                                                                                                                                                                      |
| Normalization tag                          | string  | Tag to use for normalization.                                                                                                                                                                   |
| Normalization name                         | string  | Name of the normalization.                                                                                                                                                                      |
| Masks                                      | array   | Masks to use during training - this will exclude all pixels from outside of the area during the training process. If multiple masks are specified, they will be combined.                       |
| Iterate over number of components/clusters | boolean | Test several number of clusters ranging from 3 to the value defined in the 'Number of components/clusters'.                                                                                     |
| Number of components/clusters [all]        | integer | Number of components to use.  If the value is 0, number of components will be identical to the number of features. '0' can only be used for PCA and NMF. The other methods will raise an error. |
| Distance metric [UMAP]                     | string  | Distance metric to use for clustering.                                                                                                                                                          |
| Number of neighbors [UMAP]                 | integer | Number of neighbors to use for clustering.                                                                                                                                                      |
| Minimum distance [UMAP]                    | number  | Minimum distance to use for clustering.                                                                                                                                                         |
| Perplexity [tSNE]                          | integer | Perplexity - balance between preserving the global and local structure of the data.                                                                                                             |
| Exaggeration [tSNE]                        | number  | Exaggeration - used to increase the attractive forces between points.                                                                                                                           |
| Inter-normalization                        | boolean | Inter-normalization.                                                                                                                                                                            |
| Batch normalization                        | boolean | Batch normalization.                                                                                                                                                                            |
| Auto-rotate images                         | boolean | Automatically rotate images that are taller than they are wider.                                                                                                                                |
| Colormap                                   | string  | Colormap to use for the image.                                                                                                                                                                  |
| Plot style                                 | array   | Style of the generated figures.                                                                                                                                                                 |
| DPI                                        | integer | DPI of the image.                                                                                                                                                                               |
| Export to file                             | array   | Type of output of the centroid data                                                                                                                                                             |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                             | Required/Optional   |
|----------------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)          | required            |
| [W: Extract ion centroids (subset-dataset)](wf_mz_extract_centroids_subset.md)         | required            |
| [P: Merge single-datasets into project (merged-dataset)](pre_merge_datasets.md)        | required            |
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
| Allowed in grid of parameters     | True    | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |