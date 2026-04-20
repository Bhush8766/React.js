import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className='container w-50 p-5 mt-5 bg-info rounded'>
      <h3>Login here...</h3>

      <form>
        <div className="form-floating mb-3">
          <input 
            type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com" 
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-5">
          <input 
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password" 
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/register">If not registered</Link>
      </form>
    </div>
  )
}

export default LoginPage