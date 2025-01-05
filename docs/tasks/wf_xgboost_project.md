# W: XGBoost training (merged-project)

## Brief description
Train a XGBoost classification model on the data.

## Parameters
### **Tag (identifier)** (`type` - string)

Tag to use to help identify object.

### **Merged project** (`type` - array)

Merged project to use for training. If not specified, all projects will be used.

### **Centroid tag** (`type` - string)

Tag to use for the object.

### **Normalization tag** (`type` - string)

Tag to use for normalization.

!!! help
    Rather than applying a normalization to the entire dataset, we apply it as needed to each task at hand.<br> You can compare the effect normalization has on specific task by repeating it with different normalization.<br> In some cases, its advised to use 'multi-dataset' normalization, in particular when doing comparisons.
### **Normalization name** (`type` - string)

Name of the normalization.

### **Balance scheme** (`type` - string)

Scheme to use for balancing the data.

### **Classification type** (`type` - string)

Type of classification to perform.

### **Positive mask** (`type` - string)

Mask to use for the positive class. If not specified, the mask will be automatically determined.

### **Negative mask** (`type` - array)

Mask to use for the positive class. If not specified, the mask will be automatically determined.

### **No. of iterations** (`type` - integer)

Number of training iterations to obtain the best model and estimate SHAP values.

### **No. of estimators** (`type` - integer)

Number of estimators to use for training.

### **Max. depth** (`type` - integer)

Maximum depth of the tree.

### **Subsample** (`type` - number)

Subsample ratio of the training instances. Setting it to 0.8 means that XGBoost would randomly sample 80% of the training data prior to growing trees.

### **Gamma** (`type` - number)

Minimum loss reduction. Increasing this value will make model more conservative.

### **Regularization lambda** (`type` - number)

L2 regularization term on weights. Increasing this value will make model more conservative.

### **Regularization alpha** (`type` - number)

L1 regularization term on weights. Increasing this value will make model more conservative.

### **Learning rate** (`type` - number)

Step size shrinkage used in update to prevent overfitting.

### **Inter-normalization** (`type` - boolean)

Inter-normalization.

### **Batch normalization** (`type` - boolean)

Batch normalization.

### **Colormap** (`type` - string)

Colormap to use for the image.

### **Plot style** (`type` - array)

Style of the generated figures.

### **DPI** (`type` - integer)

DPI of the image.

### **Auto-rotate images** (`type` - boolean)

Automatically rotate images that are taller than they are wider.

### **Export images as** (`type` - string)

Export figures as image or within a single PDF or PowerPoint.

### **Export to file** (`type` - array)

Type of output of the supervised data








## Attributes
| Attribute                         | Value   | Description                                                                                                                                                                                              |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple allowed                  | True    | Allow multiple instances of this task in a workflow.                                                                                                                                                     |
| Task can fail                     | True    | Task is optional and can fail without causing the entire workflow to fail.                                                                                                                               |
| Step can fail                     | True    | Sub-tasks of this task can fail without causing the entire task (and workflow) to fail.                                                                                                                  |
| Requires ion mobility             | False   | Task requires ion mobility data.                                                                                                                                                                         |
| Task can fail (with ion mobility) | False   | This task uses ion mobility data but it is allowed to fail, without causing the entire workflow to fail.                                                                                                 |
| Allowed in reference dataset      | True    | Task is to be performed on a 'reference' dataset. This will allow for multiple analyses to be performed on the same dataset, without cluttering or duplicating certain tasks (**unused at the moment**). |