import React from 'react'
import Kanban from '../reusable/Kanban'

const KanbanSection: React.FC = () => {
  return (
    <div className='kanban-wrapper'>

      <Kanban type='task' />
      <Kanban type='work' />
      <Kanban type='done' />

    </div>
  )
}

export default KanbanSection
