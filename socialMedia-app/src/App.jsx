import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar'

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App