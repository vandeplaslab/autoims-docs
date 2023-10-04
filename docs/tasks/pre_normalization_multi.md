# Normalization (multi-dataset)

## Attributes
* `allowed to fail`: `false`
* `multiple`: `false`
* `dependecies`: 
    - [Normalization (single-dataset)](pre_normalization_single.md) - required

## Description

This task simply generates normalizations based on all the datasets available for the project. This can help remove batch normalization effects.

To identify this normalization amongst other tasks, you can specify `tag` which should be unique.

By default, we will always generate the following normalizations:

* TIC, RMS, Median
* 5% TIC, 10% TIC (bottom 5 and 10% of intensities is cut-off)
* 90% TIC, 95% TIC (top % and 10% of intensities is cut-off)
* 5/10% TIC and 10/90% TIC (bottom 5/10% and top 5/10% of intensities are cut-off)
* any other normalizations specified by their m/z