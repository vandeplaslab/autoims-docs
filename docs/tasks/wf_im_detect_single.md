# W: Ion mobility feature detection (single-dataset)

## Brief description
Detect peaks in the average ion mobility heatmap of each dataset separately. Each dataset will have different set of features which cannot be compared.

## Parameters
### **Heatmap source** (`type` - string)

Source of the ion mobility heatmap.

### **m/z min** (`type` - number)

Minimum m/z to convert.

### **m/z max** (`type` - number)

Maximum m/z to convert.

### **Filter features** (`type` - boolean)

Filter out some false positive features.

### **Max. number of peaks** (`type` - integer)

Maximum number of peaks to detect. If 'value=0' then all peaks will be detected.

### **Filename** (`type` - string)

Filename to use for the object.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.




## Dependencies (other tasks that this task might depend on)
| Depends on                                                                           | Required/Optional   |
|--------------------------------------------------------------------------------------|---------------------|
| [P: Average ion mobility heatmap (single-dataset)](pre_average_heatmap.md)           | required            |
| [W: Average ion mobility heatmap / mask (single-dataset)](wf_mask_heatmap_single.md) | required            |

## Dependents (tasks that might depend on this task)
| Dependants                                                                     | Required/Optional   |
|--------------------------------------------------------------------------------|---------------------|
| [W: Extract ion centroids (single/multi-dataset)](wf_mz_extract_centroids.md)  | optional            |
| [W: Extract ion centroids (subset-project)](wf_mz_extract_centroids_subset.md) | optional            |
| [W: Compute quality control metrics (multi-dataset)](wf_qc_compute.md)         | optional            |
| [W: Group statistics of mass spectra (multi-dataset)](wf_mz_ion_statistics.md) | optional            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | True    | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |