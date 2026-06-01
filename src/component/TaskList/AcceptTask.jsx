import React, { useState } from 'react'

const AcceptTask = ({ employeeId, task, onStatusChange, onAddFollowUp }) => {
  const [followUp, setFollowUp] = useState('')

  const submitFollowUp = (e) => {
    e.preventDefault()
    onAddFollowUp(employeeId, task.id, followUp)
    setFollowUp('')
  }

  return (
    <article className="flex min-h-[360px] flex-col rounded-lg border border-amber-900/60 bg-amber-950 p-5 shadow-lg shadow-slate-950/20">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded bg-amber-400 px-2 py-1 text-xs font-semibold text-slate-950">
          {task.category}
        </span>
        <time className="text-sm text-amber-100">{task.date}</time>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">{task.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-amber-50/90">{task.description}</p>

      <div className="mt-4 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-100">Follow ups</p>
        <div className="max-h-24 space-y-2 overflow-y-auto pr-1">
          {(task.followUps || []).length ? (
            task.followUps.map((item) => (
              <p key={item.id} className="rounded bg-slate-900/60 px-3 py-2 text-xs text-slate-100">
                {item.note}
              </p>
            ))
          ) : (
            <p className="text-xs text-amber-100/80">No follow ups yet.</p>
          )}
        </div>
      </div>

      <form onSubmit={submitFollowUp} className="mt-4 flex flex-col gap-2">
        <textarea
          value={followUp}
          onChange={(e) => setFollowUp(e.target.value)}
          className="min-h-20 rounded-md border border-amber-800 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-300"
          placeholder="Add a follow up"
        />
        <button className="rounded-md bg-amber-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200">
          Add Follow Up
        </button>
      </form>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <button onClick={() => onStatusChange(employeeId, task.id, 'completed')} className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">
          Mark Completed
        </button>
        <button onClick={() => onStatusChange(employeeId, task.id, 'failed')} className="rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-400">
          Mark Failed
        </button>
      </div>
    </article>
  )
}

export default AcceptTask
