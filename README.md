#Little sass Project

Steps:

- `npm init` to create a `package.json` file in your project directory
- `npm install --save -dev gulp gulp-sass browser-sync` to install the gulp package (+ sass and browser-sync) in your devDependencies
- create a file named `gulpfile.js` in project root dir
- `gulp` to run single task or `gulp <task> <othertask>` to run multiple tasks
- in package.json change scripts to the following `"scripts": {"start": "gulp"}`