import React from 'react'

const NewTask = ({ employeeId, task, onStatusChange }) => {
  return (
    <article className="flex min-h-[260px] flex-col rounded-lg border border-cyan-900/60 bg-cyan-950 p-5 shadow-lg shadow-slate-950/20">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded bg-cyan-300 px-2 py-1 text-xs font-semibold text-slate-950">
          {task.category}
        </span>
        <time className="text-sm text-cyan-100">{task.date}</time>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">{task.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-cyan-50/90">{task.description}</p>
      <button
        onClick={() => onStatusChange(employeeId, task.id, 'active')}
        className="mt-5 rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
      >
        Accept Task
      </button>
    </article>
  )
}

export default NewTask
