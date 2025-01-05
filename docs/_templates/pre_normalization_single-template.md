We all know that normalization is important in IMS - it helps us remove technical variation, leads to more consistent analyses and improves the quality of our images. The problem, however, is which normalization should be used? We have TIC, RMS, 5/95% TIC, etc. 

Because of this ambiguity, we don't apply single normalization on the entire dataset but rather let you decide which normalization should be applied to different tasks.

This task doesn't let you make too many changes. You can only specify m/z values which can be helpful in normalizing your ion images to specific m/z (e.g. for quantitation).

By default, we will always generate the following normalizations:

* TIC, RMS, Median
* 5% TIC, 10% TIC (bottom 5 and 10% of intensities is cut-off)
* 90% TIC, 95% TIC (top % and 10% of intensities is cut-off)
* 5/10% TIC and 10/90% TIC (bottom 5/10% and top 5/10% of intensities are cut-off)
* any other normalizations specified by their m/z