import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Saved from './components/Saved'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('nature');
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);
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
      setLoader(false);
    }
    fetchImage();
  }, [search])

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} saved={saved} />
        <Routes>
          <Route path='/' element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved} />} />
          <Route path='/*' element={<Saved saved={saved} />} />
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