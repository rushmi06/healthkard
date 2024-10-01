import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import Hospitals from './pages/Admin/Hospitals'
import Approved from './pages/Admin/Hospitals/Approved'
import Pending from './pages/Admin/Hospitals/Pending'
import HospitalDetails from './pages/Admin/Hospitals/Details'
import UserDetails from './pages/Admin/Users/Details'
import NewAgent from './pages/Admin/Agents/NewAgent'
import { ThemeProvider } from './theme/Theme/ThemeContext'
import NotFound from './pages/NotFound'
import Blogs from './pages/Admin/Marketing/Blogs'
import Testimonials from './pages/Admin/Marketing/Testimonials'
import Youtube from './pages/Admin/Marketing/Youtube'
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="admin" element={ <Admin /> }>
          <Route path="hospitals" element={ <Hospitals /> } >
            <Route path="approved" element={ <Approved /> } >
              <Route path=":hospitalId" element={ <HospitalDetails /> } />
            </Route>
            <Route path="pending" element={ <Pending /> } >
              <Route path=":hospitalId" element={ <HospitalDetails /> } />
            </Route>
          </Route>
          <Route path="users/details" element={ <UserDetails /> } />
          <Route path="agents/new" element={ <NewAgent /> } />
          <Route path="marketing/blogs" element={ <Blogs /> } />
          <Route path="marketing/testimonials" element={ <Testimonials /> } />
          <Route path="marketing/youtube" element={ <Youtube /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
