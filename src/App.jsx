import Login from './component/Auth/Login'
import EmployeeDashboard from './component/DashBoard.jsx/EmployeeDashboard'
import AdminDashboard from './component/DashBoard.jsx/AdminDashboard'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from './component/Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInEmployeeId,setLoggedInEmployeeId] = useState(null) 
  const [userData,setUserData] = useContext(AuthContext)
  const loggedInUserData = userData?.find((employee) => employee.id === loggedInEmployeeId) || null

  useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
        setUser(userData.role)
        if (userData.employeeId || userData.data?.id) {
          setLoggedInEmployeeId(userData.employeeId || userData.data.id)
        }
    }
  },[])

  const updateEmployeeTask = (employeeId, taskId, updater) => {
    setUserData((prevEmployees) =>
      prevEmployees.map((employee) => {
        if (employee.id !== employeeId) return employee

        const tasks = employee.tasks.map((task) =>
          task.id === taskId ? updater(task) : task
        )

        return {
          ...employee,
          tasks,
          taskCount: getTaskCount(tasks),
        }
      })
    )
  }

  const getTaskCount = (tasks) => ({
    active: tasks.filter((task) => task.active).length,
    newTask: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    failed: tasks.filter((task) => task.failed).length,
  })

  const handleTaskStatusChange = (employeeId, taskId, status) => {
    updateEmployeeTask(employeeId, taskId, (task) => ({
      ...task,
      active: status === 'active',
      newTask: false,
      completed: status === 'completed',
      failed: status === 'failed',
    }))
  }

  const handleAddFollowUp = (employeeId, taskId, note) => {
    const text = note.trim()
    if (!text) return

    updateEmployeeTask(employeeId, taskId, (task) => ({
      ...task,
      followUps: [
        ...(task.followUps || []),
        {
          id: `followup-${Date.now()}`,
          note: text,
          createdAt: new Date().toISOString(),
        },
      ],
    }))
  }

  const handleLogin = (email, password)=>{

    if((email == 'admin@example.com' || email == 'admin@me.com') && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))    
    }else if(userData){
      const employee  = userData.find((e)=> email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInEmployeeId(employee.id)
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employee' , employeeId:employee.id}))   
     } else {
      alert("Invalid Credentials")
     }
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
     { !user ? <Login handleLogin = {handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/>:( user == 'employee' && loggedInUserData ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} onStatusChange={handleTaskStatusChange} onAddFollowUp={handleAddFollowUp}/>:null) }
    </>
  ) 
}

export default App
