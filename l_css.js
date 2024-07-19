////////////////////////
// tips and tricks
////////////////////////

width: max-content;

whitespace : nowrap
// https://developer.mozilla.org/en-US/docs/Web/CSS/white-space


///////////////////////////////////////////////////
// https://www.youtube.com/watch?v=_-aDOAMmDHI
// em vs rem
///////////////////////////////////////////////////
em is about 16px

// fonts
/////////
// em for fonts looks at the font size in the immediate parent
// rem for fonts looks at the HTML (root) font size

// margins and padding
///////////////////////
// em for margins and paddings looks towards the CURRENT level's font size
// This is useful for example, making buttons where all the margins an paddings are in relation to each other, 
// and just changing the parent font size scales the buttons correctly

// rem for margins and paddings looks towards the ROOT level's font size



///////////////////////////////////////////////////////
// CSS SHAPES
///////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=QY7Rj8aZcZk


// clip path
<div className='shape'>

.shape{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
}

// dynamic
.shape{
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vh), 0 100%)
}


///////////////////////////////////////////////
// Before and After
///////////////////////////////////////////////
// https://www.youtube.com/watch?v=xoRbkm8XgfQ
  
::before
::after

// dont work on images

// they happen before and after CONTENT, not the div
