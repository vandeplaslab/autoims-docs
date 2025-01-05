# W: Process PASEF-MS2 imaging data (single-dataset)

## Brief description
Parse PASEF imaging data and export data.

## Parameters
### **MS2 tag** (`type` - string)

Tag (glob pattern) to recognize the MS2 dataset(s) by.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **MS/MS library** (`type` - array)

Library to find tentative matches.

!!! help
    PASEF library is either MSP or Parquet file. At the moment, we don't support user-provided libraries.<br><br>If you would like to use your own library, please get in touch with <a href='mailto:l.g.migas@tudelft.nl'>Lukasz</a> to discuss further.
### **Sum no. frames** (`type` - integer)

When generating 'heatmap' spectra, sum this many frames to generate mass spectrum.

### **Peak picker** (`type` - string)

Peak picker to use.

### **Auto SNR thresholding** (`type` - boolean)

Automatically determine signal-to-noise ratio for each target.

### **SNR** (`type` - number)

Signal-to-noise ratio.

### **Min. intensity** (`type` - number)

Minimum intensity.

### **Plot style** (`type` - array)

Style of the generated figures.

### **Colormap** (`type` - string)

Colormap to use for the image.

### **DPI** (`type` - integer)

DPI of the image.




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