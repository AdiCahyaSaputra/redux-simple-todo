import React from 'react'
import KanbanSection from './components/section/KanbanSection'

const App: React.FC = () => {
  return (
    <main className='bg'>
      <div>
        <h1>Simple Kanban Todo Tapi Pake Redux</h1>

        <KanbanSection/>
      </div>
    </main>
  )
}

export default App
