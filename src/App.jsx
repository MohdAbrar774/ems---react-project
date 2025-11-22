import Login from './component/Auth/Login'
import EmployeeDashboard from './component/DashBoard.jsx/EmployeeDashboard'
import AdminDashboard from './component/DashBoard.jsx/AdminDashboard'
import { useContext, useState } from 'react'
import { AuthContext } from './component/Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData,setLoggedInUserData] = useState(null) 
  const authData = useContext(AuthContext)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  const handleLogin = (email, password)=>{

    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))    
    }else if(authData){
      const employee  = authData.employees.find((e)=> email == e.email && e.password == password);
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))   
     }
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
     { !user ? <Login handleLogin = {handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard/>:( user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/>:null) }
    </>
  ) 
}

export default App
