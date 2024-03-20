import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './components/Navbar'
import CategoryMenu from './CategoryMenu'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <CategoryMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
const Error = () => {
  return (
    <div>
      <h1>404: No Result Found</h1>
    </div>
  )
}
export default App