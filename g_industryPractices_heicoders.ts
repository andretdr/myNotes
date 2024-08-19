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

import {useForm} from 'react-hook-form';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm(); // returning register n handleSumbit 
  const handleRegistration = (data) => console.log(data);
    return(
    <form onSubmit={handleSubmit(handleRegistration)}>
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
