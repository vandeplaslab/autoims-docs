# W: Annotate average mass spectrum (merged-project)

## Brief description
Annotate average mass spectra of each dataset in a merged project.

## Parameters
| Field                  | Type    | Description                                                                                      |
|------------------------|---------|--------------------------------------------------------------------------------------------------|
| Project name           | string  | Name of the project.                                                                             |
| Spectrum source        | string  | Source of the mass spectra.                                                                      |
| Molecule type          | string  | Molecule type to annotate.                                                                       |
| Database               | array   | Database to use for annotation.                                                                  |
| Adducts                | array   | Adducts to use for annotation.                                                                   |
| PPM limit              | number  | PPM limit for annotation.                                                                        |
| m/z min                | number  | Minimum m/z to annotate.                                                                         |
| m/z max                | number  | Maximum m/z to annotate.                                                                         |
| Min. peaks             | integer | Minimum number of peaks.                                                                         |
| SNR                    | number  | Signal-to-noise ratio.                                                                           |
| Deisotope              | boolean | Deisotope spectra.                                                                               |
| Number of decoys       | integer | Number of decoys to use for FDR estimation.                                                      |
| FDR mode               | string  | FDR mode to use for annotation.                                                                  |
| Fill missing values    | boolean | When doing multi-dataset annotations, check for missing values in case SNR was too strict.       |
| Enable filtering rules | boolean | Enable filtering rules that remove unlikely lipid classes or lipid+adduct combinations.          |
| Resolution             | integer | Resolution of the data - this setting might change how we generate theoretical isotope patterns. |
| Filename               | string  | Filename to use for the object.                                                                  |
| Plot style             | array   | Style of the generated figures.                                                                  |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                                | Required/Optional   |
|-------------------------------------------------------------------------------------------|---------------------|
| [P: Average mass spectrum (single-dataset)](pre_average_spectrum.md)                      | required            |
| [W: Average mass spectrum / mask (single-dataset)](wf_mask_spectrum_single.md)            | required            |
| [W: Average mass spectrum / cluster (single-dataset)](wf_unsupervised_spectrum_single.md) | required            |
| [P: Merge single-datasets into project (merged-dataset)](pre_merge_datasets.md)           | required            |



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