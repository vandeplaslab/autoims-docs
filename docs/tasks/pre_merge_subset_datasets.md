# P: Create merged project from select single-datasets (merged-dataset)

## Brief description
Merge select single-dataset(s) into a multi-dataset project. Datasets are automatically arranged according to the specified parameters.

## Parameters
### **Project name** (`type` - string)

Name of the final project.

### **Subset of datasets** (`type` - array)

Subset of datasets selected for annotation..

### **No. of rows** (`type` - integer)

Number of rows to distribute datasets to. This value will determine how the datasets are arranged.

!!! help
    This option determines how many rows should be used when generating the 'multi-dataset' object. You should<br> think about how many datasets you are providing (also think of the different ROIs), their shape (e.g. if they<br> are short and wide like eyes or long and narrow like bone). In combination with the <b>Group by</b> option,<br> you can create various layouts for different kind of experiments!
### **Horizontal padding** (`type` - integer)

Amount of padding (pixels) between datasets along the horizontal axis.

### **Vertical padding** (`type` - integer)

Amount of padding (pixels) between datasets along the vertical axis.

### **Padding between groups** (`type` - integer)

Amount of padding (pixels) to apply between groups (if 'Group by' is specified).

### **Align direction** (`type` - string)

Merge datasets along the specified direction. 'horizontal' means that groups will be merged along the horizontal axis. 'vertical' means that groups will be merged along the vertical axis.








## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | False   | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |