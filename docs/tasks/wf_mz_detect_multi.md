# W: Feature detection (multi-dataset)

## Brief description
Detect peaks in average mass spectrum of all datasets. A single set of peaks will be generated for all datasets which can be compared.

## Parameters
| Field                | Type    | Description                                                                      |
|----------------------|---------|----------------------------------------------------------------------------------|
| Spectrum source      | string  | Source of the mass spectra.                                                      |
| Method               | string  | Peak picking method.                                                             |
| SNR                  | number  | Signal-to-noise.                                                                 |
| Threshold            | number  | Threshold for peak detection.                                                    |
| m/z min              | number  | Minimum m/z.                                                                     |
| m/z max              | number  | Maximum m/z.                                                                     |
| Max. number of peaks | integer | Maximum number of peaks to detect. If 'value=0' then all peaks will be detected. |
| Deisotope            | boolean | Deisotope spectra.                                                               |
| Filename             | string  | Filename to use for the object.                                                  |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                                | Required/Optional   |
|-------------------------------------------------------------------------------------------|---------------------|
| [P: Average mass spectrum (single-dataset)](pre_average_spectrum.md)                      | required            |
| [W: Average mass spectrum / mask (single-dataset)](wf_mask_spectrum_single.md)            | required            |
| [W: Average mass spectrum / cluster (single-dataset)](wf_unsupervised_spectrum_single.md) | required            |

## Dependents (tasks that might depend on this task)
| Dependants                                                                     | Required/Optional   |
|--------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)  | optional            |
| [W: Extract ion centroids (subset-dataset)](wf_mz_extract_centroids_subset.md) | optional            |
| [W: Compute quality control metrics (multi-dataset)](wf_qc_compute.md)         | optional            |
| [W: Peak ion statistics (multi-dataset)](wf_mz_ion_statistics.md)              | optional            |

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