const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const username = props.data?.firstname || props.role || 'Admin'

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/20 sm:flex-row sm:items-center sm:justify-between sm:p-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
          Employee Management System
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
          Hi, {username}
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className="h-10 rounded-md bg-rose-500 px-4 text-sm font-semibold text-white transition hover:bg-rose-400 sm:w-auto"
      >
        Logout
      </button>
    </div>
  )
}

export default Header
