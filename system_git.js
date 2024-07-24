/////////////////
// GIT CMD
/////////////////
// https://www.w3schools.com/git/

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


// LOG
/////////
// commit history log
git log


// HELP
/////////
git help --all  // See all possible commands
git command -help // See all the available options for the specific command

git commit -help
git prune -help

SHIFT + G to jump the end of the list
Use 'q' to exit readermode


/////////////
// BRANCH
/////////////
// creates a branch called hello-world-images from your current branch
git branch hello-world-images

// creates a branch called hello-world-images from master branch
git branch hello-world-images master

// check branch status
git branch

// MOVE to branch
git checkout hello-world-images

// -b option on checkout will create a new branch, and move to it, if it does not exist
git checkout -b new-hello-world-images

// Do your changes, stage and commit


///////////
// MERGE
///////////
// checkout to master first, then run merge on your branch 'emergency-fix TO master'
git merge emergency-fix

// DELETE branch after merging
git branch -d emergency-fix


// MERGE CONFLICT
////////////////////
// handle manually, then stage and commit the files affected



// GIT

// CLONE REPO
 https://github.com/iamshaunjp/bootstrap-5-tutorial.git

// CLONE BRANCH ONLY
git clone -b lesson-1 https://github.com/iamshaunjp/bootstrap-5-tutorial.git

// GITPAGES
// have to run build so yr page is not dynamic
npm run build
