/////////////////
// GIT CMD
/////////////////


// INSTALL
///////////////
// https://www.git-scm.com/


// VERSION
//////////////
git --version


// CONFIG
//////////////
git config --global user.name "w3schools-test"
git config --global user.email "test@w3schools.com"


// INIT
/////////
git init // inside yr folder


////////////////
// STATUS
////////////////
// shows you what is tracked, what isn't etc..
git status

// ?? - Untracked files
// A - Files added to stage
// M - Modified files
// D - Deleted files

// show modified file
git status --short M index.html



// ADD
/////////
// add untracked files to staging area
git add index.html

// add ALL to staging area
git add --all
git add -A


//////////////
// COMMIT
//////////////
// -m is message
git commit -m 'First release of hello world'

// can commit without staging. NOT reccomended
git commit -a -m 'auto commit change to hello world'




// GIT

// CLONE REPO
 https://github.com/iamshaunjp/bootstrap-5-tutorial.git

// CLONE BRANCH ONLY
git clone -b lesson-1 https://github.com/iamshaunjp/bootstrap-5-tutorial.git

// GITPAGES
// have to run build so yr page is not dynamic
npm run build
