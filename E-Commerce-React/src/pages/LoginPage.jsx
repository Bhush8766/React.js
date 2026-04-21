import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = ({ setLoggedUser }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [regUser, setRegUser] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user81"))
    setRegUser(user)
  }, [])

  function handleLogin(e) {
    e.preventDefault()

    if (!regUser) {
      toast.error("Please register first")
      return
    }

    if (email === regUser.email && password === regUser.password) {
      toast.success("Login successful 🎉")

      // ✅ fix here
      if (setLoggedUser) {
        setLoggedUser(regUser)
      }

      navigate('/dashboard')

    } else {
      toast.error("Invalid credentials")
    }
  }

  return (
    <div className='container w-50 p-5 mt-5 bg-info rounded'>
      <h3>Login here...</h3>

      <form onSubmit={handleLogin}>

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

        <button className="btn btn-primary">Login</button>
        <br /><br />
        <Link to="/register">If not registered</Link>

      </form>

      <ToastContainer transition={Bounce} />
    </div>
  )
}

export default LoginPage