// App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import Admin from "./Pages/Admin.jsx"
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="container">
          <h2>UserCRUD</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}