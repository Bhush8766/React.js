import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    console.log(email, password, "*************")
  }

  return (
    <div className='container w-50 p-5 mt-5 bg-info rounded'>
      <h3>Login here...</h3>

      <form onSubmit={handleLogin}>
        
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-5">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <br /><br />
        <Link to="/register">If not registered</Link>

      </form>
    </div>
  )
}

export default LoginPage