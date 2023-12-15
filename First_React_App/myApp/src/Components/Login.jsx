import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    Name: '',
    Password: ''
  })

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.Name && data.Password) {
      try {
        const response = {
          data1: {
            success: true,
            message: 'Login Successful'
          }
        };
        if (response.data1.success) {
          toast.success(response.data1.message);
          navigate('/')

        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data1.error);
      }
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Login From</h1>
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='Name'>Name</label>
          <input type='text' placeholder='Enter your name' required name='Name' value={data.Name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='Enter your password' required name='Password' value={data.Password} onChange={handleChange} />
        </div>
        <button>Login</button>
      </form>
    </>
  )
}

export default Login