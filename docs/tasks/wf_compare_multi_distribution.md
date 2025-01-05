# W: Distributions of ion centroids (multi-dataset)

## Brief description
Compare ion intensity statistics for set of ion images across multiple samples.

## Parameters
### **Centroid tag** (`type` - string)

Tag to use for the object.

### **Masks** (`type` - array)

Masks will be used to select subset of pixels to allow comparison within the mask region.  Multiple masks will be treated independently so if you select 2 masks/dataset, two violin  plots will be drawn for each dataset.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **No. of most abundant** (`type` - integer)

Number of most intense features to use. If 'value=0' then all features will be used.

### **Export CSVs** (`type` - boolean)

Export CSVs with the data that was used to generate the figures.

### **Plot type** (`type` - string)

Type of plot that should be generated.

### **Orientation** (`type` - string)

Orientation of the plot (vertical=intensity on the y-axis; horizontal=intensity on the x-axis).

### **Plot style** (`type` - array)

Style of the generated figures.

### **Color palette** (`type` - string)

Color palette to use to colorize mass spectra.

### **DPI** (`type` - integer)

DPI of the image.

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