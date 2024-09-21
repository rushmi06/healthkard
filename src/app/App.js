import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Approved from './pages/Admin/Approved'

function App() {
  return (
    <Routes>
      <Route path="admin" element={ <Admin /> }>
        <Route path="hospitals/approved" element={ <Approved /> } />
      </Route>
    </Routes>
  )
}

export default App
