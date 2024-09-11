import React from 'react'
import CustomRoutes from './routes'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      <ul className="bg-transparent fixed top-0 left-0 w-full  p-4  flex justify-center text-white">
        <li className="flex items-center space-x-8 font-semibold text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-teal-400 border-b-2 border-teal-400'
                : 'hover:text-teal-400 transition-colors duration-300'
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/add-users"
            className={({ isActive }) =>
              isActive
                ? 'text-teal-400 border-b-2 border-teal-400'
                : 'hover:text-teal-400 transition-colors duration-300'
            }
          >
            Add Users 
          </NavLink>
        </li>
      </ul>
      <CustomRoutes />
    </div>
  )
}

export default App
