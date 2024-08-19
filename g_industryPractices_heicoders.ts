// FORMS
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

  
