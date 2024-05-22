# W: Visualise quality control metrics (subset-dataset)

## Brief description
Compute spatial quality control metrics such as ppm error, resolving power, TIC fluctuation, etc.

## Parameters
| Field                   | Type    | Description                                                                                                                                                                                                              |
|-------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Subset of datasets      | array   | Subset of datasets selected for annotation..                                                                                                                                                                             |
| QC Tag (identifier)     | array   | Tag to use to help identify QC object.                                                                                                                                                                                   |
| Number of top           | integer | Number of most intense features to use when computing centroid QC data. If 'value=0' then all features will be used.                                                                                                     |
| Group by                | string  | Group datasets by this tag. If empty, all datasets will be merged into a single group.                                                                                                                                   |
| Title of 'group by'     | string  | Title to be used for the 'group by' option. Might be used in the figures where 'group by' is used. Only really required if the 'group by' tag is not very descriptive or ugly.                                           |
| Color by                | string  | Data will be colored by the specified tag. Can be used to distinguish e.g. healthy vs diseased.                                                                                                                          |
| Title of 'color by'     | string  | Title to be used for the 'color by' option. Might be used in the figures where 'color by' is used. Only really required if the 'color by' tag is not very descriptive or ugly.                                           |
| Split by                | string  | Data will be split by the specified tag. Can be used to compare distributions of different groups such as healthy vs diseased.                                                                                           |
| Title of 'split by'     | string  | Title to be used for the 'split by' option. Might be used in the figures where 'split by' is used. Only really required if the 'split by' tag is not very descriptive or ugly.                                           |
| Internal QC tag         | string  | Tag to use for internal QC. This will help us identify which samples are the 'internal' QCs.                                                                                                                             |
| Show internal QC in all | boolean | Show internal QC in all figures and groups.                                                                                                                                                                              |
| Number in palette       | integer | How many colors should be used in the palette when generating figures. Can be helpful if want to maintain continuity between figures.                                                                                    |
| Filter method           | string  | When accumulating statistics such as ppm error or resolution, some of the pixels might not have sufficient information to give accurate estimate of the error. These can be filtered out by specifying filtering method. |
| Export as PDF           | boolean | Export figures as PDF instead of PNG. This is useful if you don't want to generate 10s-100s figures and trying to save some space.                                                                                       |
| Plot style              | array   | Style of the generated figures.                                                                                                                                                                                          |
| Color palette           | string  | Color palette to use to colorize plots.                                                                                                                                                                                  |



## Dependencies (other tasks that this task might depend on)
| Depends on                                                             | Required/Optional   |
|------------------------------------------------------------------------|---------------------|
| [W: Compute quality control metrics (multi-dataset)](wf_qc_compute.md) | required            |



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