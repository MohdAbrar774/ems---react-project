import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <section className="rounded-lg border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/20 sm:p-6">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Team Workload</h2>
          <p className="text-sm text-slate-400">Live task counts for every employee.</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border-separate border-spacing-y-2 text-left">
          <thead>
            <tr className="text-sm text-slate-400">
              <th className="px-4 py-2 font-medium">Employee</th>
              <th className="px-4 py-2 font-medium">New</th>
              <th className="px-4 py-2 font-medium">Active</th>
              <th className="px-4 py-2 font-medium">Completed</th>
              <th className="px-4 py-2 font-medium">Failed</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((employee) => (
              <tr key={employee.id} className="bg-slate-900 text-sm">
                <td className="rounded-l-md px-4 py-3 font-semibold text-white">
                  {employee.firstname}
                  <span className="block text-xs font-normal text-slate-400">{employee.email}</span>
                </td>
                <td className="px-4 py-3 text-cyan-300">{employee.taskCount.newTask}</td>
                <td className="px-4 py-3 text-amber-300">{employee.taskCount.active}</td>
                <td className="px-4 py-3 text-emerald-300">{employee.taskCount.completed}</td>
                <td className="rounded-r-md px-4 py-3 text-rose-300">{employee.taskCount.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AllTask
