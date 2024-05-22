# Glossary and things to know

## Frequent fields

Some fields are used in multiple tasks. Here is a summary of them:

* `Tag` - a tag is used by us to identify data objects. The way we structure our data is that processed data is separated into sub-directories (e.g. normalizations go into `Normalizations` folder, heatmaps go into `Heatmaps` folder, etc.). When we try to find a data object, we will use that tag to easily identify it and then us in the task that requires it.
* `Normalization tag` - a tag to identify normalization object.
* `Normalization name` - a name of the normalization to use inside the specified task. You always have to specify `normalization tag` if you want to apply normalization. If for example you specified `normalization tag` to be `raw` and `normalization name` to be `TIC`, then under the hood we will look for `TIC` normalization inside the `raw` normalization object.
* `Automatic filename` - if set to `true`, the task will automatically generate a filename for the output. If set to `false`, you will have to specify the filename yourself.
* `m/zs` - you will sometimes want to specify some m/zs (e.g. for calibration purposes), you can do so by typing the values as floats, seaprated by a comma, e.g. `100.0, 200.0, 300.0`.