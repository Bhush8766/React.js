import { useState } from 'react'
import iphone17promax from './assets/iphone17promax.jpeg'
import './App.css'
import Product from './components/Product'
import Button from './components/Button'
import Greet from './components/Greet'

function App() {
  const [count, setCount] = useState(0)

  const subheading = {
    textAlign: 'center',
    textShadow: '2px 2px 1px red'
  }

  return (
    <>

    

      <h1 style={{ color: "red", textAlign: "center" }}>hello world</h1>
      <h3 style={subheading}>welcome to my react.js tutorial</h3>

      <Product/>

      <button>Buy Now</button>
      <Button />


      <Product />

      <Greet user='Bhushan' session={10}/>
    <Greet user='Nandini' session={10}/>
    <Greet user='Vedant' session={9}/>
    <Greet user='Sagar' session={10}/>
    </>
  )
}

export default App   
                             