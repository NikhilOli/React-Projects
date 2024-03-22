import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'

const App = () => {
  const [images, setImages] = useState([]);
  const APIKey = 'oRZwFx755E1YDBVulfQBsWia4MHNvxPuhmkg2aceWTY6GroVBOlfAgBf';
  const url = 'https://api.pexels.com/v1/search?query=nature&per_page=80'
  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${APIKey}`
        }
      })
      setImages(response.data.photos);
      console.log(response.data.photos);
    }
    fetchImage();
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}
export default App