// FORMS
//////////

// Forms or any component is a server component. Server components cannot use hooks, only client components
// For validations, etc, you may need to use client components

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
