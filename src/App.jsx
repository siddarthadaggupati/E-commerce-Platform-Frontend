import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Auth from './pages/Auth'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App