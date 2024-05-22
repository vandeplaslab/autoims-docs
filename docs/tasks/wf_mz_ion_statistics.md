# W: Peak ion statistics (multi-dataset)

## Brief description
Compute ion statistics such as p- and q-values, volcano plots, and many other metrics across groups. This will calculate 'group' statistics to give you an idea of 'significant' features across conditions.

## Parameters
| Field                       | Type    | Description                                                                                                                                                                                                  |
|-----------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tag (identifier)            | string  | Tag to use to help identify object.                                                                                                                                                                          |
| Normalization tag           | string  | Tag to use for normalization.                                                                                                                                                                                |
| Normalization name          | string  | Name of the normalization.                                                                                                                                                                                   |
| Number of bootstrap samples | integer | Number of bootstrap samples to use for p-value estimation.                                                                                                                                                   |
| Export as PDF               | boolean | Export figures as PDF instead of PNG. This is useful if you don't want to generate 10s-100s figures and trying to save some space.                                                                           |
| Plot style                  | array   | Style of the generated figures.                                                                                                                                                                              |
| m/zs                        | array   | M/z values.                                                                                                                                                                                                  |
| Peaklist                    | string  | Path to peaklist file.                                                                                                                                                                                       |
| Number of spectral samples  | integer | Number of spectral samples when accumulating ion statistics. Value of 1 means that the average spectrum is used.                                                                                             |
| Neighbourhood radius        | integer | Radius to use for the neighbourhood. Value of 0 means that the current pixel is used. Value of 1 means that the current pixel and its 8 neighbours are used, 2 means that the current pixel and its 24, etc. |
| Reduce method               | string  | Method to use for reducing the statistics.                                                                                                                                                                   |
| Collection method           | string  | Method to use for collecting the statistics.                                                                                                                                                                 |
| Integration ppm             | number  | ppm tolerance for integration.                                                                                                                                                                               |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                                   | Required/Optional   |
|------------------------------------------------------------------------------|---------------------|
| [P: Normalization (single-dataset)](pre_normalization_single.md)             | optional            |
| [P: Normalization (multi-dataset)](pre_normalization_multi.md)               | optional            |
| [P: Normalization (merged-project)](pre_normalization_project.md)            | optional            |
| [W: Feature detection (single-dataset)](wf_mz_detect_single.md)              | optional            |
| [W: Feature detection (multi-dataset)](wf_mz_detect_multi.md)                | optional            |
| [W: Ion mobility feature detection (single-dataset)](wf_im_detect_single.md) | optional            |



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