////////////////////////
// tips and tricks
////////////////////////

width: max-content;

whitespace : nowrap;
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
/////////////////////
// https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

<div className='shape'>

.shape{
  clip-path: circle(50px at 0 50%) // x y from top left corner, 0 from left, 50% from top
}
  
.shape{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
}

// dynamic
.shape{
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vh), 0 100%)
}

// ADVANCED CLIP PATH
// combining clip-paths
/////////////////////////////


  // defined yr clip paths in html
  <svg width="0" height="0">
    <defs>
      <clipPath id="myClip">
        <polygon points="400,50 400,320, 140,300"/>
        <polygon points="450,10 500,200 600,100" />
        <polygon points="150,10 100,200 300,100" />
      </clipPath>
    </defs>
  </svg>


  // the css class that uses it
.image{
  clip-path:url(#myClip);
}


// and the element that uses the class
  <div className='image'>




    

///////////////////////////////////////////////
// Before and After
///////////////////////////////////////////////
// https://www.youtube.com/watch?v=xoRbkm8XgfQ
  
::before
::after

// dont work on images

// they happen before and after CONTENT, not the div
