import React from 'react'

const CompleteTask = ({ task }) => {
  return (
    <article className="flex min-h-[240px] flex-col rounded-lg border border-emerald-900/60 bg-emerald-950 p-5 shadow-lg shadow-slate-950/20">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded bg-emerald-300 px-2 py-1 text-xs font-semibold text-slate-950">
          {task.category}
        </span>
        <time className="text-sm text-emerald-100">{task.date}</time>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">{task.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-emerald-50/90">{task.description}</p>
      <div className="mt-5 rounded-md bg-emerald-500/20 px-3 py-2 text-center text-sm font-semibold text-emerald-100">
        Completed
      </div>
    </article>
  )
}

export default CompleteTask
