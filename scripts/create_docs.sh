# Create docs for the project

start_dir=$PWD
echo "Current directory: " $start_dir
github_dir=$(realpath $start_dir/../)
echo "GitHub directory: " $github_dir
source_path=$(realpath $github_dir/../autoims/venv/bin/activate)
echo "Source path: " $source_path

# activate appropriate environment
source $source_path

python create_docs_for_tasks.py
