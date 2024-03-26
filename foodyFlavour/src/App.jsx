import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import {Provider} from 'react-redux'
import store from './store/store'


const App = () => {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}
const Error = () => {
  return (
    <div className='text-center'>
      <h1>404: No Result Found</h1>
    </div>
  )
}
export default App