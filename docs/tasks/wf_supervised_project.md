# W: Supervised training (merged-project)

## Brief description
Train a classification model on the data.

## Parameters
| Field                                       | Type    | Description                                                                                                                                      |
|---------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Tag (identifier)                            | string  | Tag to use to help identify object.                                                                                                              |
| Merged project                              | array   | Merged project to use for training. If not specified, all projects will be used.                                                                 |
| Algorithm                                   | string  | Algorithm to use for training.                                                                                                                   |
| Centroid tag                                | string  | Tag to use for the object.                                                                                                                       |
| Normalization tag                           | string  | Tag to use for normalization.                                                                                                                    |
| Normalization name                          | string  | Name of the normalization.                                                                                                                       |
| Balance scheme                              | string  | Scheme to use for balancing the data.                                                                                                            |
| Classification type                         | string  | Type of classification to perform.                                                                                                               |
| Positive mask                               | string  | Mask to use for the positive class. If not specified, the mask will be automatically determined.                                                 |
| Negative mask                               | array   | Mask to use for the positive class. If not specified, the mask will be automatically determined.                                                 |
| Multiple masks                              | array   | Masks to use for training of the classification model. Different scenarios are possible, depending on the classification type that was selected. |
| Number of components [LDA]                  | integer | Number of components to use for linear model fitting.                                                                                            |
| Number of estimators [RandomForest/XGBoost] | integer | Number of estimators to use for training.                                                                                                        |
| Maximum depth [RandomForest/XGBoost]        | integer | Maximum depth of the tree.                                                                                                                       |
| Inter-normalization                         | boolean | Inter-normalization.                                                                                                                             |
| Batch normalization                         | boolean | Batch normalization.                                                                                                                             |
| Auto-rotate images                          | boolean | Automatically rotate images that are taller than they are wider.                                                                                 |
| Colormap                                    | string  | Colormap to use for the image.                                                                                                                   |
| Plot style                                  | array   | Style of the generated figures.                                                                                                                  |
| DPI                                         | integer | DPI of the image.                                                                                                                                |
| Export to file                              | array   | Type of output of the centroid data                                                                                                              |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                             | Required/Optional   |
|----------------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)          | required            |
| [W: Extract ion centroids (subset-dataset)](wf_mz_extract_centroids_subset.md)         | required            |
| [P: Register GeoJSON masks from QuPath (single-dataset)](pre_geojson_registration.md)  | required            |
| [P: Register image2image HDF5 masks (single-dataset)](pre_image2image_registration.md) | required            |
| [P: Merge single-datasets into project (merged-dataset)](pre_merge_datasets.md)        | required            |
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
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |