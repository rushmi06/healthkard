import React from 'react'
import { Routes, Route } from 'react-router-dom'
// admin
import Admin from './pages/Admin'
import Hospitals from './pages/Admin/Hospitals'
import Approved from './pages/Admin/Hospitals/Approved'
import Pending from './pages/Admin/Hospitals/Pending'
import HospitalDetails from './pages/Admin/Hospitals/Details'
import UsersDetails from './pages/Admin/Users/Details'
import UserDetailed from './pages/Admin/Users/Detailed'
import NewAgent from './pages/Admin/Agents/NewAgent'
import { ThemeProvider } from './theme/Theme/ThemeContext'
import NotFound from './pages/NotFound'
import Blogs from './pages/Admin/Marketing/Blogs'
import Testimonials from './pages/Admin/Marketing/Testimonials'
import Youtube from './pages/Admin/Marketing/Youtube'
import Alert from './components/Alert'
import EmailBox from './components/EmailBox'
import Users from './pages/Admin/Users'
import Agents from './pages/Admin/Agents'
import AgentLogs from './pages/Admin/Agents/AgentLogs'
import AgentDetails from './pages/Admin/Agents/AgentDetails'
import MobileUsers from './pages/Admin/Users/MobileUsers'
import MobileUserDetailed from './pages/Admin/Users/MobileUserDetailed'
import Records from './pages/Admin/Users/Records'
import Transactions from './pages/Admin/Transactions'
import Database from './pages/Admin/Database'
import NewHospital from './pages/Registration/NewHospital'
import NewUser from './pages/Registration/NewUser'
import ViewImage from './components/ViewImage'
import { Toaster } from 'react-hot-toast'
import './App.css'
// public
import Public from './pages/Public'
import Home from './pages/Public/Home'
import ListOfHospitals from './pages/Public/Hospitals'
import HospitalForPublic from './pages/Public/Hospital'
function App() {
  return (
    <ThemeProvider>
      <Alert />
      <EmailBox />
      <ViewImage />
      <Toaster />
      <Routes>
        <Route path="/" element={ <Public /> } >
          <Route path="/" element={ <Home /> } />
          <Route path='hospitals' element={ <ListOfHospitals /> } />
          <Route path='hospital/:hospitalId' element={ <HospitalForPublic /> } />
        </Route>
        <Route path="admin" element={ <Admin /> }>
          <Route path="hospitals" element={ <Hospitals /> } >
            <Route path="approved" element={ <Approved /> } >
              <Route path=":hospitalId" element={ <HospitalDetails /> } />
            </Route>
            <Route path="pending" element={ <Pending /> } >
              <Route path=":hospitalId" element={ <HospitalDetails /> } />
            </Route>
          </Route>
          <Route path="users" element={ <Users /> } >
            <Route path="details" element={ <UsersDetails /> } >
              <Route path=":userId" element={ <UserDetailed /> } />
            </Route>
            <Route path="mobile" element={ <MobileUsers /> } >
              <Route path=":userId" element={ <MobileUserDetailed /> } />
            </Route>
            <Route path="records" element={ <Records /> } />
          </Route>
          <Route path="agents" element={ <Agents /> } >
            <Route path="new" element={ <NewAgent /> } />
            <Route path="logs" element={ <AgentLogs /> } >
              <Route path=":agentId" element={ <AgentDetails /> } />
            </Route>
          </Route>
          <Route path="marketing/blogs" element={ <Blogs /> } />
          <Route path="marketing/testimonials" element={ <Testimonials /> } />
          <Route path="marketing/youtube" element={ <Youtube /> } />
          <Route path="transactions" element={ <Transactions /> } />
          <Route path="database" element={ <Database /> } />
        </Route>
        <Route path='new-hospital' element={ <NewHospital /> } />
        <Route path='new-user' element={ <NewUser /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
