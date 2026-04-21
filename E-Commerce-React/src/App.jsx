import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'


const App = () => {
   const user = {
    userName: "Bhushan"
  };
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/dashboard' element={<Dashboard loggedUser={user}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App