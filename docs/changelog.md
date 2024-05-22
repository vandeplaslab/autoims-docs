# Changelog

## ;;VERv0.1.11;;
* ;;new;; When creating `tags.csv` file and a file already exists, you will be asked to confirm if it should be overwritten. If so, a backup will be created.
* ;;new;; Improved validation of `P: Register GeoJSON masks from QuPath`
* ;;new;; Added a couple of hints to nudge you to check the input data.
* ;;new;; Added more hyperlinks to the `Notes / Warnings / Errors` section so you can just click and be done with it!
* ;;new;; The `polarity` section of `Directory contents` is now clickable - helpful if you accidentally put positive & negative mode data into the same project and want to check what doesn't add up. (it would say `mixed`)
- ;;change;; Updated icons so that if it's a warning, it is a check mark since it does pass validation but might have some minor warnings.
- ;;fix;; Fixed a bug which happened if you tried saving settings with `W: Mass spectral QC` task in the list.


## ;;VERv0.1.10;;
* ;;new;; Added `Compare mosaic images (single-dataset)` task which will create grid of ion images for each dataset separately.
* ;;new;; Added `Register GeoJSON masks from QuPath` task which will co-register QuPath generated GeoJSON files with your IMS data
* ;;new;; Added `Register image2image HDF5 masks` tasks which will co-register masks generated in image2image (based on QuPath GeoJSON files)
* ;;new;; Added `W: Average mass spectrum / mask (single-dataset)` task which will use the co-registered masks for generating average mass spectra
* ;;new;; Added `W: Annotate mass spectra (single-dataset)` task which will provide annotations for each mass spectrum in dataset (e.g. spectra from masks or clustering). You can specify which kind of spectrum (or spectra) should be used.
* ;;new;; Added `W: Supervised training (single-dataset)` and  `W: Supervised training (merged-project)` tasks which add supervised/classification training.
* ;;new;; Added `W: Peak ion statistics` task which let's you discover which m/zs are up- or down-'regulated' between groups of datasets. This uses a subset of pixels to estimate `p-` and `q-statistics`.
* ;;new;; Added `W: Centroid ion statistics` task which let's you discover which m/zs are up- or down-'regulated' between groups of datasets. This uses all pixels to estimate `p-` and `q-statistics`.
* ;;new;; Added `W: Mass spectral QC` task which computes quality control stats such as ppm error, peak resolution, etc for a subset of ions of interest.
* ;;new;; Added a field to enable filtering of tasks to quickly disable tasks that are not required.
* ;;new;; Added `Create template` and `Check database` options to the `W: Annotate ...` tasks to validate whether provided database files will be accepted by annotine.
* ;;new;; Added `Masks` selection to the `W: Unsupervised...` tasks, enabling you to focus the unsupervised training on a subset of pixels.
* ;;new;; Added `Export to file` to the `W: Unsupervised...` tasks, enabling you to export OME-TIFF or HDF5 files (which you can view in image2image!).
* ;;new;; Added `image2image HDF5` export in the `W: Extract ion centroids` task.
* ;;new;; Added `polarity` check to warn you if you put in mixed polarity data.
* ;;new;; Added `annotine` database validator to make sure it can be read by annotine (check for column names in the CSV file).
* ;;new;; It's now possible to use different spectra/heatmap sources in the `Feature detection` tasks. This can help in finding more interesting features specific to a particular mask.
* ;;new;; It is now possible to use different spectra in the `Annotation...` workflows.
* ;;change;; The `colormap` dropdown is now searchable to speed things up.
* ;;change;; The `Compare mosaic images (stitched)` has been renamed to `Compare mosaic images (multi-dataset)`
* ;;change;; The `Compare mosaic images (multi-dataset)` will once again only support `common` peak lists.
* ;;change;; Renamed `W: Annotate spectra (annotine)` to `W: Annotate mass spectrum (multi-dataset)`
* ;;change;; Improved the walk-through tutorial with more information.
* ;;change;; Validation should be much, much faster now.
* ;;change;; Improved validation of nearly every task (**please read the warnings**!)
* ;;change;; Updated the list of annotine databases (removed `HMDB4` and added `LMSD`).
* ;;change;; You can now select multiple `Plot styles` in all tasks that have that option. This let's you experiment with different plots.
- ;;remove;; Removed the `Grid/tags` field from `P: Tags and names` task since it was not necessary.
- ;;remove;; Removed the option to specify own `Tag (identifier)` from several tasks - they are now automatically generated.
- ;;remove;; Removed the `Method` option from `P: Mass alignment` and `P: Mass calibration` tasks since it could lead to poor results if used incorrectly.
* ;;fix;; Fixed hundreds (thousands?) of bugs and inconsistencies.


## ;;VERv0.1.8;;
* ;;new;; You can download the newest version of the app from within AutoIMS!
* ;;new;; Added new `W: Compare spectra (one-vs-one, single dataset)` task that will compare spectra within a single dataset
* ;;new;; Added `W: Average mass spectrum / cluster (single-dataset)` task which will let you generate average mass spectrum for each KMeans cluster (these can be used for comparing spectral differences and in the future, for annotations
* ;;new;; Added tSNE as an additional dimensionality reduction method
* ;;new;; Added a couple of parameter options to both `W: Unsupervised` tasks (mostly for UMAP)
* ;;new;; Added `Find the optimal number of clusters` option to the `W: Unsupervised...` tasks which will automatically determine the optimal number of clusters using the elbow method
* ;;new;; Added a button to `validate` against the data in the `raw` directory - a short report will be shown to say whether files in your `raw` directory are matched against the `tags.csv` file.
* ;;new;; Each time a task is missing some dependency (other task required), it will now display it as a hyperlink which you can click and be taken to the missing task.
* ;;new;; Added toggle between light and dark theme of the app
* ;;new;; Added option to export centroid data as `image2image` compatible HDF5 files (available to use in the next release of `image2image`
* ;;new;; You will be warned if there is no ion mobility data in the `raw` directory but you've selected `W: 2d feature detection task`
* ;;new;; Added a `sort` button to the selected tasks so you can sort tasks by their priority (it's automatically done when saving config but might be helpful)
* ;;new;; It is now possible to remove user from the `M: Contact information` task
* ;;new;; You will now have to confirm whether you want to close the window to prevent accidental losses of data
* ;;remove;; Removed the `Ex: Centroids to OME-TIFF`, `Ex: Centroids to Fusion CSV` and `Ex: Dataset to imzML` tasks and migrated the export to the `Wf: Extract ion centroids` where you can select several export options (multiple exports permitted per task)
* ;;remove;; Removed the `Ex: Average mass spectrum` task - it is now integrated directly into the `Pre: Average mass spectrum` task (multiple exports permitted per task)
* ;;remove;; Removed the `method=extracted` from `Ex: Dataset to imzML` task as it's no longer needed here (see Wf: Extract ion centroids)
* ;;change;; Renamed the `Wf: Compare spectra grid` to `Wf: Compare spectra (one-vs-one, multi-dataset)`.
* ;;change;; Moved the `Profiles` combobox to a new location so it occupies less space
* ;;change;; Changed the way we display paths to use hyperlinks so you can click on them and be taken to the right folder
* ;;change;; Renamed all tasks to no longer use the `Pre` or `Wf` identifiers - they are now `P` or `W` to make names slightly shorter
* ;;change;; The `tag` variable of `W: Extract ion centroids` can now be auto-generated
* ;;change;; Cleaned-up the `results` directory so fewer directories will be now created
* ;;change;; The icons indicating whether something is valid or not have been moved to the left-hand side
* ;;change;; There are now three different icons to indicate whether a task is valid. Those are `succes` (green check mark), `warning` (orange warning sign) and `error` (red cross). As before, warnings are simply there to notify you of some additional considerations but will not cause task failures.
* ;;change;; Logging is now much more extensive so hopefully that will help us catch bugs/errors.
* ;;change;; The automatically `tags.csv` will now feature much more reasonable defaults.
* ;;fix;; The `Wf: Unsupervised training (multi-dataset)` task now permits multiple instances (e.g. PCA and UMAP in the same config...)
* ;;fix;; Fixed a bug which prevented manual filename creation
* ;;fix;; Fixed many bugs in task validation
* ;;fix;; Fixed a bug which prevented proper loading of tags.csv
* ;;fix;; Pre-selected calibrants will now be properly selected in the `Selection window`
* ;;fix;; Fixed a bug where the average mass spectra files always had an odd name
* ;;fix;; Tutorial will no longer go backwards


## ;;VERv0.1.7;;
- ;;new;; added `Wf: 2D feature detection (single-dataset)` task which enables 2d feature detection
- ;;new;; added `Pre: Merge single-datasets` task which combines several datasets obtained from different files into one large dataset
- ;;new;; added `Wf: Unsupervised training (multi-dataset)` task - now that we can create multi-dataset objects
- ;;new;; added `Tutorial` that walks through various aspects of the app (shown on first initialization and can be found in the statusbar/menu)
- ;;new;; fixed automatic `tags.csv` file generation
- ;;new;; added progress bar to show the progress of generating automatic `tags.csv`
- ;;new;; added 👍 button to allow manual validation of tasks
- ;;change;; improved validation of filenames and tags
- ;;change;; improved validation of many tasks
- ;;change;; validation of the 'Available' and 'Selected' tasks is now slightly different
- ;;change;; duplicate filenames/tags are no longer permitted
- ;;change;; certain tasks will now not be allowed for centroids generated with different m/zs
- ;;change;; added more information about certain fields
- ;;change;; added `style` to annotation task
- ;;change;; improved layout/ui
- ;;change;; some logging information will now show in the main window
- ;;change;; the version checker background task will run slightly more frequently now
- ;;fix;; fixed hundreds of little bugs


## ;;VERv0.1.5;;
* ;;change;; Improve normalization defaults (e.g. selecting normalization task will auto-select it in other tasks)
* ;;change;; Improve data validation
* ;;change;; Fixed a bug where it was not possible to clear selected tasks
* ;;change;; Improved the way normalizations are validated
* ;;change;; Improved the way centroids are validated
* ;;change;; Fixed a bug where would be saved to the wrong place
* ;;change;; The average heatmap will now also produce average mass spectrum (which can automatically complete the average mass spectrum task)

## ;;VERv0.1.4;;
* initial release