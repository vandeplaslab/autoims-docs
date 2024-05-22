# W: Compute quality control metrics (multi-dataset)

## Brief description
Compute spatial quality control metrics such as ppm error, resolving power, TIC fluctuation, etc.

## Parameters
| Field              | Type   | Description                         |
|--------------------|--------|-------------------------------------|
| Tag (identifier)   | string | Tag to use to help identify object. |
| m/zs               | array  | M/z values.                         |
| Peaklist           | string | Path to peaklist file.              |
| Centroid tag       | string | Tag to use for the object.          |
| Normalization tag  | string | Tag to use for normalization.       |
| Normalization name | string | Name of the normalization.          |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                     | Required/Optional   |
|--------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)  | required            |
| [W: Extract ion centroids (subset-dataset)](wf_mz_extract_centroids_subset.md) | required            |
| [P: Normalization (single-dataset)](pre_normalization_single.md)               | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)                 | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)              | optional            |
| [W: Feature detection (single-dataset)](wf_mz_detect_single.md)                | optional            |
| [W: Feature detection (multi-dataset)](wf_mz_detect_multi.md)                  | optional            |
| [W: Ion mobility feature detection (single-dataset)](wf_im_detect_single.md)   | optional            |

## Dependents (tasks that might depend on this task)
| Dependants                                                                         | Required/Optional   |
|------------------------------------------------------------------------------------|---------------------|
| [W: Visualise quality control metrics (subset-dataset)](wf_qc_visualise_subset.md) | required            |
| [W: Visualise quality control metrics (multi-dataset)](wf_qc_visualise_multi.md)   | required            |

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