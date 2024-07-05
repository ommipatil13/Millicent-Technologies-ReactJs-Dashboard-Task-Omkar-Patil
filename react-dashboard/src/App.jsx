import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AddCategory from './components/AdminPages/AddCategory'
import Check from './components/AdminPages/Check'

function App() {

  return (
    <>

      {/* <Home /> */}

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/check' element={<Check />} />
        <Route path='/addcategory' element={<AddCategory />} />
      </Routes>

    </>
  )
}

export default App
