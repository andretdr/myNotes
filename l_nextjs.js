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


////////////////////
// Dynamic ROutes
// AND dynamic ids

app/posts/[id]/

// all [id] will share the page.tsx

export default function Page(input) {
  return <div>Post ID: input.params.id</div>
}

// OR
export default function Page({ params }) {
  return <div>Post ID: {params.id}</div>
}



//////////////////////
// Metadata

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Heicoders',
  description: 'This is the description that will be read on searches like Google search.',
}

/////////////////////
// Dynamic Metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

import type { Metadata } from 'next'
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  return {
    title: id
  }
}


///////////////////
// STYLES, CSS
// https://www.youtube.com/watch?v=If5LI88_aY8

// global.css affects ALL pages
.myheight{
  background-color: 'black';
  color: 'white';
}

<div className='myheight'>

// local to each page
import styles from "./about.module.css"

<div className={`container-fluid ${styles.input}`}>
...

about.module.css
.input{
  ......
}





///////////////////////
// Image Component
// dont use <img> anymore

<Image 
  src='..'
  width={}
  height={}
  alt=''
  />
  
- optimizes img loading automatically webp avif




////////////////////////
// CORRECT ASPECT RATIO

<div style={{width:100%, max-width:'500px'}}>
  <Image
    src='..'
    alt='..'
    width={500}
    height={0}
    style={{width:'500px', height:'auto'}}
    
    />
</div>
