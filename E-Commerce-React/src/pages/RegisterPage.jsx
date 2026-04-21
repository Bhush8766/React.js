import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast.warning("All fields are required")
      return
    }

    const regUser = {
      userName: name,
      email: email,
      password: password
    }

    localStorage.setItem('user81', JSON.stringify(regUser))
    toast.success("Register successful 🎉")
  }

  return (
    <div className='container w-50 p-5 mt-5 bg-info rounded'>
      <h3>Register here...</h3>

      <form onSubmit={handleRegister}>

        <div className="form-floating mb-3">
          <input type="text" className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label>User Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="email" className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="form-floating mb-4">
          <input type="password" className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button className="btn btn-primary">Register</button>
        <br /><br />
        <Link to="/">Already registered?</Link>

      </form>

      <ToastContainer />
    </div>
  )
}

export default RegisterPage