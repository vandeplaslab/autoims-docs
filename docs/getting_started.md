# Getting started

## App

The `AutoIMS` app will generate configuration file which can be understood by our `AutoIMS-Runner` app in Delft.

The `runner` app works by continuosly syncing data from Vanderbilt to Delft and executing executing tasks that have been specified by the user (e.g. you).
The way you specify the tasks is very simple.
You select your project (see below), select tasks from the `Available tasks` list, modify any parameters you wish to modify, add the task to the `Selected tasks` list and then click `Save configuration`.
Once that is done, that configuration file alongside all the data is copied to Delft, and we run the workflow.

## Folder structure

All data must live within the **DELFT** folder, and then within you own folder.

```
DELFT
├── lgmigas
    └── project-1
        ├── config.json
        ├── extras
        │   └── masks
        │       ├── dataset_1_mask.geojson
        │       ├── dataset_1_registration.i2r.json
        │       ├── dataset_2_mask.geojson
        │       └── dataset_2_registration.i2r.json 
        ├── raw
        │   ├── dataset_1.d
        │   ├── dataset_2.d
        │   └── dataset_X.d
        └── tags.csv
```

### Meaning of each folder/file

- The **DELFT** folder is divided based on user names so that everyone has their own space for experiments. 
- Inside each **user folder**, you can create **projects** that would encompass different types of analyses.
- In the **raw** folder, you can put your Bruker (.d) or Waters (.raw) datasets.
- In the **extras** folder, you can provide additional files such as masks, databases, README, etc.
- In the **extras/masks** folder, you can provide GeoJSON masks and i2r.json registration files (from image2image).
- In the **extras/databases** folder, you can provide CSV files with database(s) to be used by annotine.
- In the **extras/peaklists** folder, you can provide CSV peaklist files to be used in centroid data extraction.

Inside each user folder, you should create **projects** that would encompass different types of analysis. 


## Structuring your own data
### Using Windows Explorer/Finder

Here are some basic steps:
1. Inside the **DELFT** folder, please create your directory (e.g. for me, this would be **lgmigas**).
2. Inside that folder, add the name of your project (e.g. **kidney_matrix_pos**)
3. Inside that folder, you create folder **raw** where you would paste your raw data (e.g. Bruker .d)
4. Then you can use the AutoIMS App to generate your configuration.


### Using the app

1. Open the AutoIMS app.
2. Click on the `Select project directory` button.
3. Select directory within the **DELFT** folder.
4. Create your new project folder (e.g. **kidney_matrix_pos**) as above.
5. Click on the `Create template directory...` button.
6. TA-DA! The folder was pre-populated with a few files.
