# W: Filter ion centroids (multi-dataset)

## Brief description
Filter ion centroids based on m/z, kendrick mass, mass defect, matrix or colocalization metrics.<br>Task will be performed on all datasets together, resulting in a single peaklist.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use for the object.

### **Centroid tag** (`type` - string)

Tag to use for the object.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **Filter by m/z** (`type` - boolean)

Filter peaklist using mass window, searching for potential isotopes within a specified ~1Da +- ppm window.

### **PPM tolerance** (`type` - number)

PPM tolerance for filtering by m/z.

### **Filter by m/z & colocalization** (`type` - boolean)

Filter peaklist using mass window and imate colocalization, searching for potential isotopes within a specified ~1Da +- ppm window and image similarity (measured by colocalization).

### **PPM tolerance** (`type` - number)

PPM tolerance for filtering by m/z.

### **Image threshold** (`type` - number)

Threshold for filtering images using the colocalization metric.

### **Filter by matrix** (`type` - boolean)

Filter peaklist by removing known matrix peaks. Please select appropriate matrix peaklist below

### **Matrix/Polarity peaklist** (`type` - string)

Matrix or polarity peaklist to use for filtering.

!!! warning
    Filtering by matrix is very much experimental. Matrix peaklists are not finalized and might accidentally remove<br>valuable signals from your data.







## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |