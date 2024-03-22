import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('nature');
  const APIKey = 'oRZwFx755E1YDBVulfQBsWia4MHNvxPuhmkg2aceWTY6GroVBOlfAgBf';
  const url = `https://api.pexels.com/v1/search?query=${search}&per_page=80`
  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${APIKey}`
        }
      })
      setImages(response.data.photos);
      console.log(search);
    }
    fetchImage();
  }, [search])

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images} />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

const Error = () => {
  return (
    <div className='flex justify-center items-center'>
      <h1 className='text-4xl'>404: No Result Found</h1>
    </div>
  )
}