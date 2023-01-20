import { useState } from 'react'
import Allroutes from './components/Allroutes'
import Homeslider from './components/homeSlider'
import Navbar from './components/navbar'
import Homepremium from './pages/premium'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <br />
      <Allroutes />
    </>
  )
}

export default App
