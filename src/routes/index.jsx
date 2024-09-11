import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users'
import AddUsers from '../pages/AddUsers'

function CustomRoutes() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Users/>}  />
        <Route path='/add-users' element={<AddUsers/>}  />
      </Routes>
    </div>
  )
}

export default CustomRoutes
