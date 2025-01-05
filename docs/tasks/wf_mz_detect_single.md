# W: M/z feature detection (single-dataset)

## Brief description
Detect peaks in mass spectra of each dataset separately. Each dataset will have different set of peaks which cannot be compared.

## Parameters
### **Spectrum source** (`type` - string)

Source of the mass spectra.

### **Method** (`type` - string)

Peak picking method.

### **m/z min** (`type` - number)

Minimum m/z.

### **m/z max** (`type` - number)

Maximum m/z.

### **Automatic SNR** (`type` - boolean)

Automatically determine SNR value which will use knee-based method to estimate appropriate SNR. This will also override the 'Min. peaks' parameter.

### **Centwave SNR** (`type` - boolean)

Use the CentWave method to estimate SNR. This might produce fewer peaks but they should be of higher quality.

### **SNR** (`type` - number)

Signal-to-noise.

### **Threshold** (`type` - number)

Threshold for peak detection.

### **Max. number of peaks** (`type` - integer)

Maximum number of peaks to detect. If 'value=0' then all peaks will be detected.

### **Deisotope** (`type` - boolean)

Deisotope spectra.

### **Filename** (`type` - string)

Filename to use for the object.




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
| [W: Extract ion centroids (subset-project)](wf_mz_extract_centroids_subset.md) | optional            |
| [W: Compute quality control metrics (multi-dataset)](wf_qc_compute.md)         | optional            |
| [W: Group statistics of mass spectra (multi-dataset)](wf_mz_ion_statistics.md) | optional            |

## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |