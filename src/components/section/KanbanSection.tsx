import React from 'react'
import Kanban from '../reusable/Kanban'
import { useSelector } from 'react-redux'

const KanbanSection: React.FC = () => {

  const { task, work, done } = useSelector((state) => state.todoStore.todos)

  console.log(task, work, done)

  return (
    <div className='kanban-wrapper'>

      <Kanban type='task' todos={task} />
      <Kanban type='work' todos={work}/>
      <Kanban type='done' todos={done}/>

    </div>
  )
}

export default KanbanSection
