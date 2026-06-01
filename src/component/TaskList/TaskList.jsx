import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, onStatusChange, onAddFollowUp}) => {

  return (
    <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AcceptTask key={elem.id || idx} employeeId={data.id} task={elem} onStatusChange={onStatusChange} onAddFollowUp={onAddFollowUp}/>
        }
        if(elem.newTask){
          return <NewTask key={elem.id || idx} employeeId={data.id} task={elem} onStatusChange={onStatusChange}/>
        }
        if(elem.completed){
          return <CompleteTask key={elem.id || idx} task={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={elem.id || idx} task={elem}/>
        }
        return null
      })}
    </div>
  )
}

export default TaskList
