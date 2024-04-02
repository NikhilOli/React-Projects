import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App