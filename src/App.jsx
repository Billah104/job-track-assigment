import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'
// import Footer from './Componets/Footer/Footer'
import Header from './Componets/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className='md:min-h-[calc(100vh-140px)]'><Outlet></Outlet></div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App