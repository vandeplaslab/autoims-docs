# P: Normalization (merged-project)

## Brief description
Generates normalizations for a merged project. This task takes into account all datasets within a single merged project (e.g. ROIs or different files) and computes normalizations for each of them.

## Parameters
| Field        | Type   | Description                                       |
|--------------|--------|---------------------------------------------------|
| Project name | string | Name of the project.                              |
| Tag          | string | Tag to be associated with the normalization data. |

## More Information
We all know that normalization is important in IMS - it helps us remove technical variation, leads to more consistent analyses and improves the quality of our images. The problem, however, is which normalization should be used? We have TIC, RMS, 5/95% TIC, etc. 

Because of this ambiguity, we don't apply single normalization on the entire dataset but rather let you decide which normalization should be applied to different tasks.

This task doesn't let you make too many changes. You can only specify m/z values which can be helpful in normalizing your ion images to specific m/z (e.g. for quantitation).

By default, we will always generate the following normalizations:

* TIC, RMS, Median
* 5% TIC, 10% TIC (bottom 5 and 10% of intensities is cut-off)
* 90% TIC, 95% TIC (top % and 10% of intensities is cut-off)
* 5/10% TIC and 10/90% TIC (bottom 5/10% and top 5/10% of intensities are cut-off)
* any other normalizations specified by their m/z

## Dependencies (other tasks that this task might depend on)
| Depends on                                                                      | Required/Optional   |
|---------------------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)                | required            |
| [P: Merge single-datasets into project (merged-dataset)](pre_merge_datasets.md) | required            |

## Dependents (tasks that might depend on this task)
| Dependants                                                                                | Required/Optional   |
|-------------------------------------------------------------------------------------------|---------------------|
| [P: Average mass spectrum (single-dataset)](pre_average_spectrum.md)                      | optional            |
| [W: Average mass spectrum / mask (single-dataset)](wf_mask_spectrum_single.md)            | optional            |
| [W: Average mass spectrum / cluster (single-dataset)](wf_unsupervised_spectrum_single.md) | optional            |
| [W: Average mass spectrum / class (single-dataset)](wf_supervised_spectrum_single.md)     | optional            |
| [P: Average ion mobility heatmap (single-dataset)](pre_average_heatmap.md)                | optional            |
| [W: Average ion mobility heatmap / mask (single-dataset)](wf_mask_heatmap_single.md)      | optional            |
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)             | optional            |
| [W: Extract ion centroids (subset-dataset)](wf_mz_extract_centroids_subset.md)            | optional            |
| [W: Unsupervised training (single-dataset)](wf_unsupervised_single.md)                    | optional            |
| [W: Unsupervised training (merged-project)](wf_unsupervised_project.md)                   | optional            |
| [W: Supervised training (single-dataset)](wf_supervised_single.md)                        | optional            |
| [W: Supervised training (merged-project)](wf_supervised_project.md)                       | optional            |
| [W: Compute quality control metrics (multi-dataset)](wf_qc_compute.md)                    | optional            |
| [W: Peak ion statistics (multi-dataset)](wf_mz_ion_statistics.md)                         | optional            |
| [W: Centroid ion statistics (multi-dataset)](wf_centroids_ion_statistics.md)              | optional            |
| [W: Compare mosaic images (single-dataset)](wf_compare_single_mosaic.md)                  | optional            |
| [W: Compare mosaic images (multi-dataset)](wf_compare_mosaic.md)                          | optional            |
| [E: Dataset to imzML (single-dataset)](ex_export_imzml.md)                                | optional            |
| [W: Process PASEF-MS1 imaging data (single-dataset)](wf_pasef_ms1.md)                     | optional            |
| [W: Process PASEF-MS2 imaging data (single-dataset)](wf_pasef_ms2.md)                     | optional            |

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