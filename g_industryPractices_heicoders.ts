nm // FORMS
//////////

// Forms or any component is a server component. Server components cannot use hooks, only client components
// For validations, etc, you may need to use client components

// Regular Form
//////////////////

export default function RegisterPage() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input name='name'></input>
      </div>
      <div>
        <label>Email</label>
        <input name='email'></input>
      </div>
      <div>
        <label>Password</label>
        <input name='password'></input>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}


// React Form
////////////////

// React-Hook-Form
// all these need to be client components
// can take in prorps and returns a value
// USEFORM hooks
/////////////////////

npm install react-hook-form

// create components in components folder
// make this a client components
'use client'
import {useForm} from 'react-hook-form';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm(); // returning register n handleSumbit 
  const handleRegistration = (data) => console.log(data);
    return(
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input name='name' {...register('name')} /> // react hook forms, need to spread register yr attributes
      </div>
      <div>
        <label>Email</label>
        <input name='email' type='email' {...register('email')} /> // type='email' does simple email validation
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password' {...register('password')} />
      </div>
      <button type='submit'>Submit</button>
    </form>


// you can create custom validation
// but react-hook-form not the best for validation
<input
  {...register("test", {
      maxLength : {
        value: 2,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }
  })}
/>

////////////////////////////////////////////////////
// VALIDATION WITH ZOD, another validation library
// dont using react-hook form validation as it is not a validation library
// zod.dev
////////////////////////////////////////////////////////////////////////////

npm i @hookform/resolvers
npm i zod
  
// zod integration
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define your validation schema or structure
const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

function MyForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      
      <input {...register("email")} />
      
      <button type="submit">Submit</button>
    </form>
  );
}


// integrate w prev example
'use client'
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
}

export default function RegisterPage() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema) // WILL VALIDATE AGAINST THE SCHEMA YOU PROVIDED ABOVE. IF NOT PASS SCHEMA, will not submit form
  }); // returning register n handleSumbit 
    
  const handleRegistration = (data) => console.log(data);
    return(
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input name='name' {...register('name')} /> // react hook forms, need to spread register yr attributes
      </div>
      <div>
        <label>Email</label>
        <input name='email' type='email' {...register('email')} /> // type='email' does simple email validation
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password' {...register('password')} />
      </div>
      <button type='submit'>Submit</button>
    </form>



////////////////////////
// FORM STATE ERRORS
////////////////////////

// integrate w prev example
'use client'
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
}

export default function RegisterPage() {
function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ // INCLUDINNG FORMSTATE: ERRORS to CATCH ERRORS
    resolver: zodResolver(schema)
  });
    
  const handleRegistration = (data) => console.log(data);
    return(
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input name='name' {...register('name')} /> // react hook forms, need to spread register yr attributes
        {errors.username}
      </div>
      <div>
        <label>Email</label>
        <input name='email' type='email' {...register('email')} /> // type='email' does simple email validation
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password' {...register('password')} />
      </div>
      <button type='submit'>Submit</button>
    </form>

  



///////////////////
// TAILWIND SETUP
///////////////////

// setup tailwind and all using
create-next-app

npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p // initialise and setup default values

// install this in vscode
vscode tailwind extension
  
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // paths where you want tailwind to run
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// globals.css
// ensure this is present in yr app folder
@tailwind base;
@tailwind components;
@tailwind utilities;


// UI component library
// SHADCN
// https://ui.shadcn.com/docs
///////////////////////////////////

// install
npx shadcn-ui@latest init

// from the https://ui.shadcn.com/docs/components/button install section
npx shadcn-ui@latest add button

// usage
import { Button } from "@/components/ui/button"

<Button variant="outline">Button</Button>

// react hook forms
// https://ui.shadcn.com/docs/components/form

npx shadcn-ui@latest add form
npx shadcn-ui@latest add input

'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
}

export default function RegisterPage() {
const form = useForm({
    resolver: zodResolver(schema)
  });
    
  const handleRegistration = (data) => console.log(data);
  
  return(
    <div>
      <h1>Create User</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegistration)}>
      
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your full name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type='email' placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                This is your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
                This is your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />


            
    </div>

