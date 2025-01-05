This task will extract average ion mobility heatmap for each dataset in the dataset folder.

The average heatmap will be based on the specified `proportion` (of pixels/frames) of the dataset. 

* If the value is equal to `1.0`, then all pixels will be used for this task. 
* If this value is less than `1.0`, e.g. `0.5` then 50% of all pixels will be used. The 50% is selected evenly throughout the dataset.

We don't apply normalization on the entire dataset which means that we can (and should) apply normalizations on certain tasks, such as generating heatmaps. You can select normalization tag (source) and normalization name (e.g. TIC).