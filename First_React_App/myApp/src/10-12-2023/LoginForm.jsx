import React, { useState } from 'react'

const LoginForm = () => {

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [allEntry, setAllEntry] = useState([])

  const handleSubmit=(e) => { 
    e.preventDefault()
    const newEntry = {
      Name:userName,
      Password:userPassword,
      Email:userEmail
    }
    setAllEntry([...allEntry, newEntry])
    console.log(newEntry)
   }

  return (
    <>
      <form style={{display:'flex',flexDirection:'column',alignItems:'center'}} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder='enter your name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='enter your password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
          </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='enter your email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}/>
          </div>
          <button type='submit'>Click me</button>
      </form>
    </>
  )
}

export default LoginForm