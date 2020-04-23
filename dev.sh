#!/bin/sh

# Replace this with the path to your repository
REPOSITORY_DIR=/Users/davisford/Documents/sample-react-jupyterlab-extension

# Replace with the name of your conda environment
CONDA_ENV=jl-extension-env

# Helper function.
# Opens a new tab and executes a command in iTerm2
# Credit: https://apple.stackexchange.com/questions/110778/open-new-tab-in-iterm-and-execute-command-there
newtabi(){  
  osascript \
    -e 'tell application "iTerm2" to tell current window to set newWindow to (create tab with default profile)'\
    -e "tell application \"iTerm2\" to tell current session of newWindow to write text \"${@}\""
}

# Open a new tab and start running the local web dev server
newtabi "conda activate ${CONDA_ENV} && cd ${REPOSITORY_DIR} && yarn watch"
# Open another new tab and open up JupyterLab
newtabi "conda activate ${CONDA_ENV} && cd ${REPOSITORY_DIR} && jupyter lab --watch"