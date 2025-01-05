# E: Export mass spectrum (single-dataset)

## Brief description
Export mass spectrum (or mass spectra) for each dataset in the project.

## Parameters
### **Output format** (`type` - array)

Format to use for the output file.

### **Average spectrum** (`type` - boolean)

Export average spectrum - by default, we export summed mass spectrum.

### **Decimal points** (`type` - integer)

Specify the number of decimal points that should be used when exporting in text format. This will increase the file size but is essential for high-resolution FT-ICR data.








## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |