const Header = (props) => { 
  // const [username,setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload();
  }
  return (
  <div className='flex item-center justify-between'>
   <h1 className='text-2xl font-medium'>Hii, <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
   <button onClick={logOutUser} className='bg-red-600 h-8 w-16 font-lg rounded-sm border-white '>Logout</button>
    </div>
  )
}

export default Header
