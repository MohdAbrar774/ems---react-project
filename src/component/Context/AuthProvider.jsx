import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../../utils/localStorage'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userdata, setUserdata] = useState(null)

    useEffect(()=>{
        const {employees} = getLocalStorage()
        setUserdata(employees)
    },[])

    useEffect(() => {
      if (userdata) {
        localStorage.setItem('employees', JSON.stringify(userdata))
      }
    }, [userdata])

  return (
    <>
        <AuthContext.Provider value={[userdata,setUserdata]}>
      {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
