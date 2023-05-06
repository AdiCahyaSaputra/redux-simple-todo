import React, { useState } from 'react'
import KanbanSection from './components/section/KanbanSection'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/todoSlice'

const App: React.FC = () => {

  const [todo, setTodo] = useState('')

  const dispatch = useDispatch()
  const submitHanlder: React.FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <main className='bg'>
      <div>
        <h1>Simple Kanban Todo Tapi Pake Redux</h1>
        <form onSubmit={submitHanlder}>
          <input type='text' value={todo} placeholder='Todo' onChange={(e) => setTodo(e.target.value)} className='add-todo-input' />
          <button type='submit' className='add-todo-btn'>Add Todo</button>
        </form>
        <KanbanSection />
      </div>
    </main>
  )
}

export default App
