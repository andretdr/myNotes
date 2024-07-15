////////////////////////
// NEXT JS

// default way to create next js app

// npx, npm which also executes some code
// --example, specifies which example from the github page, in this case hello-world
// heicoders-app is the name of yr app
npx create-next-app --example hello-world heicoders-app

// lets you enforce rules of typescript
tsconfig.json

// APP ROUTING NOT page Routing
//////////////////////////////////
// routes and physical folders are one to one, from / which is the app folder
// each URL segment related to an actual folder


// PAGES
//////////////////
// page.tsx will always be needed in any folder
// it is the page that will be loaded


// LAYOUT
//////////////////
// REUSEABLE COMPONENTS will use the same layout.tsx

// root layout.tsx must exist
// it will define <HTML><Body></HTML>
// BODY is where your page.tsx lives
// layout.tsx on all other folders are optional.
// the PAGE.tsx goes INTO the layout.tsx. these are the children of the parent layout


// ROUTE GROUPS
////////////////
// check this out


// THERE ARE OTHER .TSX AS WELL
// ERROR, NOT FOUND... ETC


// Navigation
///////////////
// use LINK to navigate, DOES NOT TRIGGER A FULL PAGE RELOAD
// UNLIKE a href anymore

import Link from 'next/link'
  
<Link href="/lesson2/execercise3">Excercise3</Link>


// Dynamic routes

// Route pages

// Go read the heicoders document
