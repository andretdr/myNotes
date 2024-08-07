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
// check local AND remote status
git branch -a
// check only REMOTE status
git branch -r

// MOVE to branch
git checkout hello-world-images

// -b option on checkout will create a new branch, and move to it, if it does not exist
git checkout -b new-hello-world-images

// Do your changes, stage and commit



///////////
// MERGE
///////////
// Merge onto CURRENT branch
// checkout to master first, then run merge on your branch 'emergency-fix TO master'
git merge emergency-fix

// DELETE branch after merging
git branch -d emergency-fix


// MERGE CONFLICT
////////////////////
// handle manually, then stage and commit the files affected

 

**************
*** GITHUB ***
**************
//////////////////////////////////
// PUSH LOCAL REPO to GitHub, SETUP
// ORIGIN MASTER
// 2 STEPS, ADD ORIGIN, PUSH
//////////////////////////////////

// ADD ORIGIN-> URL to your local REPO
git remote add origin https://github.com/andretdr/gitHelloWorld.git

// PUSH MASTER BRANCH TO ORIGIN
git push --set-upstream origin master



//////////////
// PULLING
// https://www.w3schools.com/git/git_pull_from_remote.asp?remote=github
// 2 STEPS, FETCH, MERGE
//////////////

// FETCH
//////////
// fetch gets all the change history of a tracked branch/repo.
git fetch origin

// check status/logs
git status
git log origin/master
// show the differences
git diff origin/master

// MERGE
//////////
git merge origin/master

// PULL
// pull is auto fetch and merge
/////////////////////////////////
git pull orgin

// fetches commits from the master branch of the origin remote (into the local origin/master branch), and then it merges origin/master into the branch you currently have checked out.
git pull origin master 

// only works if the branch you have checked out is tracking an upstream branch. For example, if the branch you have checked out tracks origin/master, git pull is equivalent to git pull origin master
git pull 


////////////////
// PUSHING
////////////////
// make sure all is added/committed locally

// Push current branch to default origin
git push origin




// GITHUB BRANCHES
// https://www.w3schools.com/git/git_remote_branch.asp?remote=github
////////////////////

// Pulling remote branch to local
/////////////////////////////////

// first update local by pull from orgin
git pull orgin

// then checkout the remote branch
git branch -a
git checkout html-skeleton
git branch

// Pushing local branch to remote branch
////////////////////////////////////////

// have a local branch created and changes added and committed
// from the current checkedout branch,
git push origin <remote branch name>
git push origin update-readme

// pull request
// Once this is done remote github will have a new branch, update-readme. You can go in and merge it w the master using a PULL REQUEST


//////////////////////////
// GIT WORKFLOW
// https://www.w3schools.com/git/git_github_flow.asp?remote=github
// //////////////////////////////////////////////////////////////////


// GIT FORKING
// https://www.w3schools.com/git/git_remote_fork.asp?remote=github
// A fork is a copy of a repository to your own repo
// No GIT CMD, its a github thing
//////////////////////////////////////////////////////////////////


// CLONE FORK FROM GITHUB
/////////////////////////
// clone repo to local folder
// goto local folder, get URL from github
git clone https://github.com/w3schools-test/w3schools-test.github.io.git


// CONFIGURE REMOTES
//////////////////////
// According to Git naming conventions, it is recommended to name your own repository 'origin', and the one you forked for 'upstream'

// view current remote configs
git remote -v

// rename the original origin (the source repo you forked from which is readonly)
// rename 'origin' to 'upstream'
git remote rename origin upstream

// add your forked repo (forked repo can edit and change)
git remote add origin https://github.com/kaijim/w3schools-test.github.io.git


// push
/////////////

// make changes, add, commit and push
git push origin

// Then create a pull request on yr forked repo side for the main source repo
// https://www.w3schools.com/git/git_remote_send_pull_request.asp?remote=github


// GIT IGNORE
// .gitignore
///////////////

https://www.w3schools.com/git/git_ignore.asp?remote=github



// GITPAGES
// https://www.w3schools.com/git/git_remote_pages.asp?remote=github
// have to run build so yr page is not dynamic
npm run build


