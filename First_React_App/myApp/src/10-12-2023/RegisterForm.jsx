import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const router = useNavigate();

    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmpassword: "" })
    console.log(userData, "userData")
    async function handleSubmit(e) {
        e.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmpassword) {
            if (userData.password === userData.confirmpassword) {
                try {
                    // const response = await axios.post('http://localhost:8000/register', { userData })

                    const response = { data: { success: true, messsage: "Registeration COMPpelted." } }

                    if (response.data.success === true) {
                        alert(response.data.messsage)
                        setUserData({ name: "", email: "", password: "", confirmpassword: "" })
                        router('/login')
                    }
                } catch (error) {
                    console.log(error)
                    alert(error.response.data.messsage)
                }
            } else {
                alert("Password and Confirm Password not matched.")
            }
        } else {
            alert("All fields are required.")
        }
    }

    function handleChange(e) {
        console.log(e.target.value, e.target.name)
        setUserData({...userData, [e.target.name]: e.target.value });
    }
  return (
    <>
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type='text' required onChange={handleChange} name="name" value={userData.name} /><br />
                <label>Email :</label><br />
                <input type='email' required onChange={handleChange} name='email' value={userData.email} /><br />
                <label>Password</label><br />
                <input type='password' required onChange={handleChange} name='password' value={userData.password} /><br />
                <label>Confirm Password</label><br />
                <input type='password' required onChange={handleChange} name='confirmpassword' value={userData.confirmpassword} /><br />
                <input type='submit' value="Register" />
            </form>
        </div>
    </>
  )
}

export default RegisterForm