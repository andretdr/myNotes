/////////////////////////
// MANUAL PROJECT SETUP using NPM
/////////////////////////

// MAKE SURE NODEJS IS INSTALLED
// https://nodejs.org/en/download/package-manager

npm init
// press enter for all the default values
npm init -y
// YES to all

// created a package.json file with configurations for project

npm i react
// install
npm install react

in the package.json file

// "scripts": {
    "start": "node app.js",
    "test": "mocha"
  
run npm test to run using mocha cmd
// https://mochajs.org/


/////////////////////////////////
npm uninstall <package-name>

// global
npm uninstall -g <package-name>

/////////////////////////
// typescript

npm install typescript --save-dev

// to run
npx tsc


////////////////////////////////////////
// SETTING UP VITE PROJECT AUTOMATICALLY W NPM
////////////////////////////////////////
// VITE IS BUILDTOOL FOR SETTING UP AND SERVING/RENDERING NODE JS

// buildtools bundle relevant features and modules
// Vite for react

// TO CREATE YOUR OWN APP, 
// goto new folder

npm create vite@latest my-react-app -- --template react
// select react
// select js

// cd into my-react-app
// these will look into package.json
npm install // not adding any extra packages, Its going into package.json, look at the devDepenancies and install all
npm run dev // run the server and app

///////////////////////////////////////////////
// WITH EXISTING PROJECT, WE HAVE TO INSTALL OUR OWN DEPENDANCIES
///////////////////////////////////////////////

// copy entire project WITHOUT NODE MODULES into local folder
// cd into project
npm install // not adding any extra packages, Its going into package.json, look at the devDepenancies and install all NODE MODULES

