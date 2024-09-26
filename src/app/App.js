import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Approved from './pages/Admin/Hospitals/Approved'
import Pending from './pages/Admin/Hospitals/Pending'
import Details from './pages/Admin/Users/Details'
import NewAgent from './pages/Admin/Agents/NewAgent'
import { ThemeProvider } from './theme/Theme/ThemeContext'
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="admin" element={ <Admin /> }>
          <Route path="hospitals/approved" element={ <Approved /> } />
          <Route path="hospitals/pending" element={ <Pending /> } />
          <Route path="users/details" element={ <Details /> } />
          <Route path="agents/new" element={ <NewAgent /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
