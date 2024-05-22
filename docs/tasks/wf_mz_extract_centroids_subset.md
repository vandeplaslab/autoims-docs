# W: Extract ion centroids (subset-dataset)

## Brief description
Extract ion images. These images can be used in visualisation, unsupervised or supervised training.

## Parameters
| Field                | Type    | Description                                                                                                                                                                       |
|----------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Subset of datasets   | array   | Subset of datasets selected for annotation..                                                                                                                                      |
| Tag (identifier)     | string  | Tag to use for the object.                                                                                                                                                        |
| m/zs                 | array   | M/z values.                                                                                                                                                                       |
| Peaklist             | string  | Path to peaklist file.                                                                                                                                                            |
| Peaklist (reference) | string  | Path to peaklist file.                                                                                                                                                            |
| PPM tolerance        | number  | ppm tolerance for image extraction.                                                                                                                                               |
| Export to file       | array   | Type of output of the centroid data                                                                                                                                               |
| Normalization tag    | string  | Tag to use for normalization.                                                                                                                                                     |
| Normalization name   | string  | Name of the normalization.                                                                                                                                                        |
| Padding [Fusion CSV] | integer | Padding to use for the m/z bins. Because of the way MATLAB's Fusion works, it assumes 'profile' mode data is exported but that is not very practical due to the size of the data. |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                   | Required/Optional   |
|------------------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)             | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)               | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)            | optional            |
| [W: Feature detection (single-dataset)](wf_mz_detect_single.md)              | optional            |
| [W: Feature detection (multi-dataset)](wf_mz_detect_multi.md)                | optional            |
| [W: Ion mobility feature detection (single-dataset)](wf_im_detect_single.md) | optional            |

## Dependents (tasks that might depend on this task)
| Dependants                                                                   | Required/Optional   |
|------------------------------------------------------------------------------|---------------------|
| [W: Compute quality control metrics (multi-dataset)](wf_qc_compute.md)       | required            |
| [W: Centroid ion statistics (multi-dataset)](wf_centroids_ion_statistics.md) | required            |
| [W: Compare mosaic images (single-dataset)](wf_compare_single_mosaic.md)     | required            |
| [W: Compare mosaic images (multi-dataset)](wf_compare_mosaic.md)             | required            |
| [W: Unsupervised training (single-dataset)](wf_unsupervised_single.md)       | required            |
| [W: Unsupervised training (merged-project)](wf_unsupervised_project.md)      | required            |
| [W: Supervised training (single-dataset)](wf_supervised_single.md)           | required            |
| [W: Supervised training (merged-project)](wf_supervised_project.md)          | required            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |
| Allowed in grid of parameters     | False   | A grid of parameters can be created for this task, automatically resulting in multiple instances of the task (**unused at the moment**)                                                                  |