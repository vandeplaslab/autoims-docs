# W: Process PASEF-MS2 imaging data (single-dataset)

## Brief description
Parse PASEF imaging data and export data.

## Parameters
| Field                 | Type    | Description                                                                        |
|-----------------------|---------|------------------------------------------------------------------------------------|
| MS2 tag               | string  | Tag (glob pattern) to recognize the MS2 dataset(s) by.                             |
| Normalization tag     | string  | Tag to use for normalization.                                                      |
| Normalization name    | string  | Name of the normalization.                                                         |
| MS/MS library         | array   | Library to find tentative matches.                                                 |
| Sum no. frames        | integer | When generating 'heatmap' spectra, sum this many frames to generate mass spectrum. |
| Peak picker           | string  | Peak picker to use.                                                                |
| Auto SNR thresholding | boolean | Automatically determine signal-to-noise ratio for each target.                     |
| SNR                   | number  | Signal-to-noise ratio.                                                             |
| Min. intensity        | number  | Minimum intensity.                                                                 |
| Plot style            | array   | Style of the generated figures.                                                    |
| Colormap              | string  | Colormap to use for the image.                                                     |
| DPI                   | integer | DPI of the image.                                                                  |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                        | Required/Optional   |
|-------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)  | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)    | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md) | optional            |



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