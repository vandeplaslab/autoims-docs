var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome","text":"<p>AutoIMS is an app to generate configuration for performing various tasks on imaging mass spectrometry data.</p> <p></p>"},{"location":"changelog.html","title":"Changelog","text":""},{"location":"changelog.html#v015","title":"v0.1.5","text":"<ul> <li>Improve normalization defaults (e.g. selecting normalization task will auto-select it in other tasks)</li> <li>Improve data validation</li> <li>Fixed a bug where it was not possible to clear selected tasks</li> <li>Improved the way normalizations are validated</li> <li>Improved the way centroids are validated</li> <li>Fixed a bug where would be saved to the wrong place</li> <li>The average heatmap will now also produce average mass spectrum (which can automatically complete the average mass spectrum task)</li> </ul>"},{"location":"changelog.html#v014","title":"v0.1.4","text":"<ul> <li>initial release</li> </ul>"},{"location":"getting_started.html","title":"Getting started","text":""},{"location":"getting_started.html#folder-structure","title":"Folder structure","text":"<p>All data must live within the DELFT folder, and then within you own folder.</p> <pre><code>DELFT\n\u251c\u2500\u2500 lgmigas\n \u00a0\u00a0 \u2514\u2500\u2500 project-1\n \u00a0\u00a0     \u251c\u2500\u2500 config.json\n \u00a0\u00a0     \u251c\u2500\u2500 extras\n \u00a0\u00a0     \u2502\u00a0\u00a0 \u2514\u2500\u2500 masks\n \u00a0\u00a0     \u2502\u00a0\u00a0     \u251c\u2500\u2500 dataset_1_mask.geojson\n        \u2502       \u251c\u2500\u2500 dataset_1_registration.i2r.json\n \u00a0\u00a0     \u2502\u00a0\u00a0     \u251c\u2500\u2500 dataset_2_mask.geojson\n        \u2502\u00a0\u00a0     \u2514\u2500\u2500 dataset_2_registration.i2r.json \n \u00a0\u00a0     \u251c\u2500\u2500 raw\n \u00a0\u00a0     \u2502\u00a0\u00a0 \u251c\u2500\u2500 dataset_1.d\n \u00a0\u00a0     \u2502\u00a0\u00a0 \u251c\u2500\u2500 dataset_2.d\n \u00a0\u00a0     \u2502\u00a0\u00a0 \u2514\u2500\u2500 dataset_X.d\n \u00a0\u00a0     \u2514\u2500\u2500 tags.csv\n</code></pre>"},{"location":"getting_started.html#meaning-of-each-folderfile","title":"Meaning of each folder/file","text":"<ul> <li>The DELFT folder is divided based on user names so that everyone has their own space for experiments. </li> <li>Inside each user folder, you can create projects that would encompass different types of analyses.</li> <li>In the raw folder, you can put your Bruker (.d) or Waters (.raw) datasets.</li> <li>In the extras folder, you can provide additional files such as masks, databases, README, etc.</li> <li>In the extras/masks folder, you can provide GeoJSON masks and i2r.json registration files (from image2image).</li> <li>In the extras/databases folder, you can provide CSV files with database(s) to be used by annotine.</li> <li>In the extras/peaklists folder, you can provide CSV peaklist files to be used in centroid data extraction.</li> </ul> <p>Inside each user folder, you should create projects that would encompass different types of analysis. </p>"},{"location":"getting_started.html#structuring-your-own-data","title":"Structuring your own data","text":""},{"location":"getting_started.html#using-windows-explorerfinder","title":"Using Windows Explorer/Finder","text":"<p>Here are some basic steps: 1. Inside the DELFT folder, please create your directory (e.g. for me, this would be lgmigas). 2. Inside that folder, add the name of your project (e.g. kidney_matrix_pos) 3. Inside that folder, you create folder raw where you would paste your raw data (e.g. Bruker .d) 4. Then you can use the AutoIMS App to generate your configuration.</p>"},{"location":"getting_started.html#using-the-app","title":"Using the app","text":"<ol> <li>Open the AutoIMS app.</li> <li>Click on the <code>Select project directory</code> button.</li> <li>Select directory within the DELFT folder.</li> <li>Create your new project folder (e.g. kidney_matrix_pos) as above.</li> <li>Click on the <code>Create template directory...</code> button.</li> <li>TA-DA! The folder was pre-populated with a few files.</li> </ol>"},{"location":"request.html","title":"Feature Requests / Bug Reports","text":""},{"location":"request.html#feature-requests","title":"Feature requests","text":"<p>You can request new features and report bugs in a couple of different ways.</p> <ol> <li>Send a request using the <code>Help &gt; Send feedback or request...</code> menu option. This will open a popup window where you can provide more information. We are using sentry.io under the hood.</li> <li>Create a GitHub issue on the autoims-docs public website. (Requires a GitHub account)</li> <li>Contact Lukasz G. Migas using Slack or email.</li> </ol>"},{"location":"request.html#bug-monitoring","title":"Bug monitoring","text":"<p>The app uses sentry.io for automatic bug reports. This sends a HTML request with error tracebacks to sentry so that we can figure out what went wrong. You can disable this behaviour by using the <code>Help &gt; Telemetry...</code> menu option and then selecting <code>No, I'd prefer not to send bug reports.</code>.</p> <p>Note<p>While we try not to capture any personal information, this is not guaranteed and some information such as file paths might be sent to us. We don't use this information for anything other than figuring out where we have bugs and what causes the errors to happen.</p> </p>"},{"location":"wip.html","title":"Work in Progress","text":"<p>Many of the tasks are still marked as 'Work-in-Progress', meaning that they haven't been written...</p> <p>Please come back later once that is changed!</p>"},{"location":"tasks/glossary.html","title":"Glossary and things to know","text":""},{"location":"tasks/glossary.html#task-attributes","title":"Task attributes","text":"<p>Each task has a couple of attributes that determine how it operates in the <code>Autoims-Runner</code> app. Here is a summary of them:</p> <ul> <li><code>allowed to fail</code> - if set to <code>true</code>, the task will not stop the entire workflow if it fails. If set to <code>false</code>, the workflow will stop if this task fails.</li> <li><code>multiple</code> - if set to <code>true</code>, multiple instances of this task are permitted (each with different set of parameters). Presence of multiple versions will usually result in different set of results, depending on the parameters. If set to <code>false</code>, only one instance of this task is permitted.</li> <li><code>dependencies</code> - a list of tasks that this task depends on. If any of the dependencies fail, this task will not be executed. If all dependencies succeed, this task will be executed. If the list is empty, this task will be executed regardless of the status of other tasks. Some dependencies are <code>optional</code> and will only apply if certain parameters are specified.</li> </ul>"},{"location":"tasks/glossary.html#frequent-fields","title":"Frequent fields","text":"<p>Some fields are used in multiple tasks. Here is a summary of them:</p> <ul> <li><code>Tag</code> - a tag is used by us to identify data objects. The way we structure our data is that processed data is separated into sub-directories (e.g. normalizations go into <code>Normalizations</code> folder, heatmaps go into <code>Heatmaps</code> folder, etc.). When we try to find a data object, we will use that tag to easily identify it and then us in the task that requires it.</li> <li><code>Normalization tag</code> - a tag to identify normalization object.</li> <li><code>Normalization name</code> - a name of the normalization to use inside the specified task. You always have to specify <code>normalization tag</code> if you want to apply normalization. If for example you specified <code>normalization tag</code> to be <code>raw</code> and <code>normalization name</code> to be <code>TIC</code>, then under the hood we will look for <code>TIC</code> normalization inside the <code>raw</code> normalization object.</li> <li><code>Automatic filename</code> - if set to <code>true</code>, the task will automatically generate a filename for the output. If set to <code>false</code>, you will have to specify the filename yourself.</li> <li><code>m/zs</code> - you will sometimes want to specify some m/zs (e.g. for calibration purposes), you can do so by typing the values as floats, seaprated by a comma, e.g. <code>100.0, 200.0, 300.0</code>.</li> </ul>"},{"location":"tasks/pre_average_heatmap.html","title":"Pre. Average heatmap","text":""},{"location":"tasks/pre_average_heatmap.html#attributes","title":"Attributes","text":"<ul> <li><code>allowed to fail</code>: <code>true</code></li> <li><code>multiple</code>: <code>true</code></li> <li><code>dependecies</code>: <ul> <li>Normalization (single-dataset) - optional</li> <li>Normalization (multi-dataset) - optional</li> </ul> </li> </ul>"},{"location":"tasks/pre_average_heatmap.html#description","title":"Description","text":"<p>This task will extract average ion mobility heatmap for each dataset in the dataset folder.</p> <p>The average heatmap will be based on the specified <code>proportion</code> (of pixels/frames) of the dataset. </p> <ul> <li>If the value is equal to <code>1.0</code>, then all pixels will be used for this task. </li> <li>If this value is less than <code>1.0</code>, e.g. <code>0.5</code> then 50% of all pixels will be used. The 50% is selected evenly throughout the dataset.</li> </ul> <p>We don't apply normalization on the entire dataset which means that we can (and should) apply normalizations on certain tasks, such as generating heatmaps. You can select normalization tag (source) and normalization name (e.g. TIC).</p> <p>See single-dataset or multi-dataset normalization for more information.</p>"},{"location":"tasks/pre_average_spectrum.html","title":"Pre. Average mass spectrum","text":""},{"location":"tasks/pre_average_spectrum.html#attributes","title":"Attributes","text":"<ul> <li><code>allowed to fail</code>: <code>true</code></li> <li><code>multiple</code>: <code>true</code></li> <li><code>dependecies</code>: <ul> <li>Normalization (single-dataset) - optional</li> <li>Normalization (multi-dataset) - optional</li> </ul> </li> </ul>"},{"location":"tasks/pre_average_spectrum.html#description","title":"Description","text":"<p>This task will extract average mass spectrum for each dataset in the dataset folder.</p> <p>The average spectrum will be based on the specified <code>proportion</code> (of pixels/frames) of the dataset. </p> <ul> <li>If the value is equal to <code>1.0</code>, then all pixels will be used for this task. </li> <li>If this value is less than <code>1.0</code>, e.g. <code>0.5</code> then 50% of all pixels will be used. The 50% is selected evenly throughout the dataset.</li> </ul> <p>We don't apply normalization on the entire dataset which means that we can (and should) apply normalizations on certain tasks, such as generating heatmaps. You can select normalization tag (source) and normalization name (e.g. TIC).</p> <p>See single-dataset or multi-dataset normalization for more information.</p>"},{"location":"tasks/pre_convert.html","title":"Pre. Convert raw data","text":""},{"location":"tasks/pre_convert.html#attributes","title":"Attributes","text":"<ul> <li><code>allowed to fail</code>: <code>false</code></li> <li><code>multiple</code>: <code>false</code></li> <li><code>dependecies</code>: <code>none</code></li> </ul>"},{"location":"tasks/pre_convert.html#description","title":"Description","text":"<p>Over the last several years, we have developed our own file format for storing IMS and IM-IMS data.</p> <p>Data conversion is a fundamental task that parses data from the vendor format (e.g. Bruker .d or Waters .raw) into our own format.</p> <p>There are a couple of optional fields:</p> <ul> <li>the <code>Split ROIs</code> will result in separate files/datasets being generated for each region of interest in the raw dataset. This is advised in most cases.</li> <li>the <code>ROIs</code> field let's you specify which ROIs should be extracted (will fail in case there are multiple datasets and they have different number of ROIs)</li> <li>the <code>m/z min</code> and <code>m/z max</code> let's you control which part of the mass axis should be used for analysis. This can be helpful if you want to have consistent mass ranges between datasets or you are not interested in anything e.g. below <code>300 Da</code> and above<code>1000 Da</code></li> </ul>"},{"location":"tasks/pre_mz_calibrate.html","title":"Pre: Mass calibration","text":""},{"location":"tasks/pre_mz_calibrate.html#attributes","title":"Attributes","text":"<ul> <li><code>allowed to fail</code>: <code>false</code></li> <li><code>multiple</code>: <code>false</code></li> <li><code>dependecies</code>: <ul> <li>Mass alignment - optional</li> <li>Average mass spectrum - required</li> </ul> </li> </ul>"},{"location":"tasks/pre_mz_calibrate.html#description","title":"Description","text":"<p>The mass calibration task is a critical step in the pre-processing of mass spectrometry imaging data. It ensures the accuracy and precision of mass measurements, which is essential for downstream analysis.</p> <p>The mass alignment task task removed majority of misalignment in the dataset (shifts along the mass axis due to change of temperature or other factors), but it would not correct for any miscalibration.</p> <p>This task relies on you specifing several (at least 2-3) calibrant species by either typing them in (e.g. <code>496.340,650.439,703.575,734.569,760.585</code>) or selecting them from the list of available calibrants.</p> <p></p>"},{"location":"tasks/pre_mz_calibrate.html#outputs","title":"Outputs","text":"<p>The mass calibration task generates a couple of outputs that can help diagnose how well the task went and also the quality of your data.</p>"},{"location":"tasks/pre_mz_calibrate.html#before-and-after-mass-calibration","title":"Before and after mass calibration","text":"<p>This plot shows you the effect the calibration had on your data. It will show a peak before and after calibration and you can see how much the mass axis shifted.</p> <p></p> <p>Things of note:</p> <ul> <li>one file will be generated for each dataset (you can see the dataset name in the title of the plot)</li> <li>the title will show you the ppm error before and after calibration</li> <li>the plot will show you the mass axis before and after calibration</li> <li>the before and after mass error is also shown for each peak (m/zs selected for calibration)</li> <li>values in green indicate that ppm error was reduced, and values in red indicate that ppm error was increased</li> </ul>"},{"location":"tasks/pre_normalization_multi.html","title":"Normalization (multi-dataset)","text":""},{"location":"tasks/pre_normalization_multi.html#attributes","title":"Attributes","text":"<ul> <li><code>allowed to fail</code>: <code>false</code></li> <li><code>multiple</code>: <code>false</code></li> <li><code>dependecies</code>: <ul> <li>Normalization (single-dataset) - required</li> </ul> </li> </ul>"},{"location":"tasks/pre_normalization_multi.html#description","title":"Description","text":"<p>This task simply generates normalizations based on all the datasets available for the project. This can help remove batch normalization effects.</p> <p>To identify this normalization amongst other tasks, you can specify <code>tag</code> which should be unique.</p> <p>By default, we will always generate the following normalizations:</p> <ul> <li>TIC, RMS, Median</li> <li>5% TIC, 10% TIC (bottom 5 and 10% of intensities is cut-off)</li> <li>90% TIC, 95% TIC (top % and 10% of intensities is cut-off)</li> <li>5/10% TIC and 10/90% TIC (bottom 5/10% and top 5/10% of intensities are cut-off)</li> <li>any other normalizations specified by their m/z</li> </ul>"},{"location":"tasks/pre_normalization_single.html","title":"Normalization (single-dataset)","text":""},{"location":"tasks/pre_normalization_single.html#attributes","title":"Attributes","text":"<ul> <li><code>allowed to fail</code>: <code>false</code></li> <li><code>multiple</code>: <code>false</code></li> <li><code>dependecies</code>: <code>none</code></li> </ul>"},{"location":"tasks/pre_normalization_single.html#description","title":"Description","text":"<p>We all know that normalization is important in IMS - it helps us remove technical variation, leads to more consistent analyses and improves the quality of our images. The problem, however, is which normalization should be used? We have TIC, RMS, 5/95% TIC, etc. </p> <p>Because of this ambiguity, we don't apply single normalization on the entire dataset but rather let you decide which normalization should be applied to different tasks.</p> <p>This task doesn't let you make too many changes. You can only specify m/z values which can be helpful in normalizing your ion images to specific m/z (e.g. for quantitation).</p> <p>By default, we will always generate the following normalizations:</p> <ul> <li>TIC, RMS, Median</li> <li>5% TIC, 10% TIC (bottom 5 and 10% of intensities is cut-off)</li> <li>90% TIC, 95% TIC (top % and 10% of intensities is cut-off)</li> <li>5/10% TIC and 10/90% TIC (bottom 5/10% and top 5/10% of intensities are cut-off)</li> <li>any other normalizations specified by their m/z</li> </ul>"},{"location":"tasks/user.html","title":"User / Contact details","text":""},{"location":"tasks/user.html#attributes","title":"Attributes","text":"<ul> <li>allowed to fail: true</li> <li>multiple: false</li> <li>dependecies: none</li> </ul>"},{"location":"tasks/user.html#description","title":"Description","text":"<p>This task is not really a task but rather a way for us to know who the data belongs to.</p> <p>You can provide your <code>name</code>, <code>slack user id</code> and <code>email</code>. </p> <p>This information will be used to contact you once data processing has finished or if there were some issues.</p> <p>You will be notified in the <code>Team Spraggins</code> workspace, in the <code>#autoims-progress</code> channel.</p> <p>How to find your Slack User ID</p> <p>Please watch this video for step-by-step instructions.</p> <p> </p>"}]}