# W: Compare mosaic images (single-dataset)

## Brief description
Generate mosaic images for each dataset.

## Parameters
| Field              | Type    | Description                                                                          |
|--------------------|---------|--------------------------------------------------------------------------------------|
| Centroid tag       | string  | Tag to use for the object.                                                           |
| Normalization tag  | string  | Tag to use for normalization.                                                        |
| Normalization name | string  | Name of the normalization.                                                           |
| Clip hotspots      | boolean | Clip image intensities to increase image contrast.                                   |
| Quantile           | boolean | Use quantile normalization - only used if the `Normalization tag` is not specified.  |
| Number of top      | integer | Number of most intense features to use. If 'value=0' then all features will be used. |
| Number of columns. | integer | Number of columns for m/z images.                                                    |
| Number of rows.    | integer | Number of columns for m/z images.                                                    |
| Auto-rotate images | boolean | Automatically rotate images that are taller than they are wider.                     |
| Colorbar           | boolean | Add colorbar to the image.                                                           |
| Colormap           | string  | Colormap to use for the image.                                                       |
| DPI                | integer | DPI of the image.                                                                    |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                     | Required/Optional   |
|--------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)  | required            |
| [W: Extract ion centroids (subset-dataset)](wf_mz_extract_centroids_subset.md) | required            |
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
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |