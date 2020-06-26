1. Choose tool:
    First step is to choose your Babel tool. This guide will go over CLI
2. Installation:
    Note, it's better to install Babel locally for each project -> npm install --save-dev @babel/core @babel/cli
3. Configure:
    Create a .babelrc file in the project root, then install an enable plugins, example below
    Install -> npm install @babel/preset-env --save-dev
    Enable -> { "presets": ["@babel/preset-env"] } //Within the config file
4. Usage:
    Add script in package.json -> "build": "babel <src> -d lib"
    Terminal -> npm run build