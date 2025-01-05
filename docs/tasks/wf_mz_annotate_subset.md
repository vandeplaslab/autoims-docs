# W: Annotate mass spectrum (subset-project)

## Brief description
This task will provide annotations based on the mass spectrum (average or other) for selected set of datasets Average mass spectra might hide some of the less abundant features but it's a good starting point for comparison between datasets.

## Parameters
### **Subset of datasets** (`type` - array)

Subset of datasets selected for annotation..

### **Spectrum source** (`type` - string)

Source of the mass spectra.

### **Molecule type** (`type` - string)

Molecule type to annotate.

### **Database** (`type` - array)

Database to use for annotation.

### **Adducts** (`type` - array)

Adducts to use for annotation.

### **PPM limit** (`type` - number)

PPM limit for annotation.

### **m/z min** (`type` - number)

Minimum m/z to annotate.

### **m/z max** (`type` - number)

Maximum m/z to annotate.

### **Automatic SNR** (`type` - boolean)

Automatically determine SNR value which will use knee-based method to estimate appropriate SNR. This will also override the 'Min. peaks' parameter.

### **SNR** (`type` - number)

Signal-to-noise ratio. Value of 0 will enable automatic SNR selection which will use knee-based method to estimate appropriate SNR. This will also override the min_peaks parameter.

### **Min. peaks** (`type` - integer)

Minimum number of peaks.

### **Deisotope** (`type` - boolean)

Deisotope spectra.

### **No. of decoys** (`type` - integer)

Number of decoys to use for FDR estimation.

### **FDR mode** (`type` - string)

FDR mode to use for annotation.

!!! help
    Annotine offers two FDR methods, one based on <b>mass spectra</b> and one based on <b>ion images</b>.<br>The <b>spectrum</b> method is substantially faster (around 100-500x!) but might be considered slightly less robust because it uses only the mass spectral information when estimating FDR.<br>The <b>image</b> method uses ion images to estimate FDR which is more akin to <b>Metaspace</b> approach but it is substantially slower.<br><br>We recommend trying out the <b>spectrum</b> method first and can always try again using the <b>image</b> method if you are not satisfied with the results.
### **Fill missing values** (`type` - boolean)

When doing multi-dataset annotations, check for missing values in case SNR was too strict.

### **Enable filtering rules** (`type` - boolean)

Enable filtering rules that remove unlikely lipid classes or lipid+adduct combinations.

### **Resolution** (`type` - integer)

Resolution of the data - this setting might change how we generate theoretical isotope patterns.

### **Export peaklist** (`type` - boolean)

Export peaklist to CSV file after annotation.

### **Filename** (`type` - string)

Filename to use for the object.

### **Diagnostic information** (`type` - boolean)

Generate diagnostic information which might with figuring out why certain annotations are not getting picked up or if there are issues with the data.

!!! warning
    You shouldn't enable this option unless you are having issues with the annotations. This will<br> generate many more figures, many of which might not be useful. This option has substantial computational<br> cost, especially if the number of annotations is high!
### **Plot style** (`type` - array)

Style of the generated figures.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.








## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |