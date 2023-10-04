# Pre: Mass calibration

## Attributes
* allowed to fail: false
* multiple: false
* dependecies: 
    - [Mass alignment](mz_align.md) - optional
    - [Average mass spectrum](mz_average_spectrum.md) - required

## Description

The mass calibration task is a critical step in the pre-processing of mass spectrometry imaging data. It ensures the accuracy and precision of mass measurements, which is essential for downstream analysis.

The [mass alignment task](mz_align.md) task removed majority of misalignment in the dataset (shifts along the mass axis due to change of temperature or other factors), but it would not correct for any miscalibration.

This task relies on you specifing several (at least 2-3) calibrant species by either typing them in (e.g. `496.340,650.439,703.575,734.569,760.585`) or selecting them from the list of available calibrants.


<figure markdown>
  ![mz-calibrants](../assets/mz_calibrants.png){ width=400px }
</figure>


