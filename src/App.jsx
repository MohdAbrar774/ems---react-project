import Login from './component/Auth/Login'
import EmployeeDashboard from './component/DashBoard.jsx/EmployeeDashboard'
import AdminDashboard from './component/DashBoard.jsx/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage } from './utils/localStorage'

const App = () => {
  useEffect(()=>{
   // setLocalStorage()
   getLocalStorage() 
  })
  return (
    <>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
    </>
  )
}

export default App
