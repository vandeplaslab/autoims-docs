# Start server
start_dir=$PWD
echo "Current directory: " $start_dir
github_dir=$(realpath $start_dir/../)
echo "GitHub directory: " $github_dir
source_path=$(realpath $github_dir/venv/bin/activate)
echo "Source path: " $source_path

source $source_path

# update docs
sh create_docs.sh

# start server
cd ../
mkdocs serve --open
cd $start_dir