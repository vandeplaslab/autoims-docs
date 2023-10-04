# Pre. Convert raw data

## Attributes
* `allowed to fail`: `false`
* `multiple`: `false`
* `dependecies`: `none`

## Description

Over the last several years, we have developed our own file format for storing IMS and IM-IMS data.

Data conversion is a fundamental task that parses data from the vendor format (e.g. Bruker .d or Waters .raw) into our own format.

There are a couple of optional fields:

* the `Split ROIs` will result in separate files/datasets being generated for each region of interest in the raw dataset. This is advised in most cases.
* the `ROIs` field let's you specify which ROIs should be extracted (will fail in case there are multiple datasets and they have different number of ROIs)
* the `m/z min` and `m/z max` let's you control which part of the mass axis should be used for analysis. This can be helpful if you want to have consistent mass ranges between datasets or you are not interested in anything e.g. below `300 Da` and above`1000 Da`


