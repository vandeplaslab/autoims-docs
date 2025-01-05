# P: Mass alignment (single-dataset)

## Brief description
Remove mass shifts between pixels improving signal-to-noise and spatial patterns.

## Parameters
### **Tag (identifier, optional)** (`type` - string)

Tag to be associated with the m/z transform data.

### **Method** (`type` - string)

Method to use for alignment. 'lockmass' is most appropriate for ToF datasets.

### **No. of m/zs** (`type` - integer)

Number of m/zs to use for alignment.

### **Search window** (`type` - number)

Search window around the peak.

!!! warning
    Don't touch this unless you know what you are doing.<br>This parameter controls how much wiggle room the algorithm has to find the peak. If the value is set too low and there is excessive amount of m/z drift<br> then it's likely to fail and give poor results. Setting this value too high can lead to false positives.<br>If you know that your data is shifted by <b>a lot</b>, then increase to 0.25 or 0.5 Da.







## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | False   | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | False   | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | False   | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |