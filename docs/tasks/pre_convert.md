# P: Convert raw data (single-dataset)

## Brief description
Converts raw data (.d or .raw) to internally used format. This is a prerequisite for all other tasks. While it's essential that this stop is carried out, you can make some adjustments how it's done.

## Parameters
### **Split ROIs** (`type` - boolean)

Split ROIs into separate datasets.

!!! help
    In the event that multiple regions of interest were acquired in a single run, you can split them into<br> separate datasets. This is often preferable because e.g. plotting or analysis can be done on a single<br> dataset at a time. You can of course disable this behaviour and keep all ROIs in a single dataset.
### **ROIs** (`type` - array)

ROIs to convert.

!!! help
    You can define which region(s) of interest you would like to extract. This field is somewhat limited by the<br> fact that whatever you insert here, it will be applied to files which is perhaps not ideal. For the time<br> being, we cannot define ROIs on a per-file basis. <b>If you would like to do that, please get in touch with us.</b>
### **m/z min** (`type` - number)

Minimum m/z to convert.

### **m/z max** (`type` - number)

Maximum m/z to convert.

### **Reader type** (`type` - string)

Reader type


## More Information
Over the last several years, we have developed our own file format for storing IMS and IM-IMS data.
Data conversion is a fundamental task that parses data from the vendor format (e.g. Bruker .d or Waters .raw) into our own format.
There are a couple of optional fields:

* the `Split ROIs` will result in separate files/datasets being generated for each region of interest in the raw dataset. This is advised in most cases.
* the `ROIs` field let's you specify which ROIs should be extracted (will fail in case there are multiple datasets and they have different number of ROIs)
* the `m/z min` and `m/z max` let's you control which part of the mass axis should be used for analysis. This can be helpful if you want to have consistent mass ranges between datasets or you are not interested in anything e.g. below `300 Da` and above`1000 Da`








## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | False   | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | False   | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | False   | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | False   | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |