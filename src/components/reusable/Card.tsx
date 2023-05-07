import React, { MouseEventHandler, useState } from 'react'
import { deleteTodo, editTodo, switchTodoType } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'

type Props = {
  todo: string,
  type: "task" | "work" | "done",
  position: number
}

const types: Props['type'][] = ["task", "work", "done"]

const Card: React.FC<Props> = ({ todo, type, position }) => {

  const [currentTodo, setCurrentTodo] = useState(todo)
  const [isEditMode, setIsEditMode] = useState(false)

  const dispatch = useDispatch()

  const submitHanlder: React.FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(editTodo({
      editTodoInfo: {
        todo: currentTodo,
        type
      },
      position
    }))

    setIsEditMode(!isEditMode)
  }

  const prevSwitchHandler: MouseEventHandler = () => {
    const typeIndex = types.findIndex((element) => element === type)

    if (typeIndex !== 0) dispatch(switchTodoType({
      type,
      switchToType: types[typeIndex - 1],
      todo,
      position
    }))
  }

  const nextSwitchHandler: MouseEventHandler = () => {
    const typeIndex = types.findIndex((element) => element === type)

    if (typeIndex !== 2) dispatch(switchTodoType({
      type,
      switchToType: types[typeIndex + 1],
      todo,
      position
    }))
  }

  const deleteHanlder: React.MouseEventHandler = () => {
    dispatch(deleteTodo({
      type, position
    }))
  }

  return (
    <div className='card'>
      <div className='todo'>

        <p>{todo}</p>
        <form onSubmit={submitHanlder} className={`${!isEditMode && 'hidden'}`}>
          <input type='text' value={currentTodo} placeholder='Todo' onChange={(e) => setCurrentTodo(e.target.value)} className='edit-todo-input' />
          <button type='submit' className='edit-todo-btn'>Edit Todo</button>
        </form>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'max-content',
          gap: '5px',
          marginTop: '10px'
        }}>
          <button
            type='button'
            onClick={() => setIsEditMode(!isEditMode)}
            className='edit-mode-btn'>
            {isEditMode ? 'Exit' : 'Enter'} Edit Mode
          </button>

          <button onClick={deleteHanlder} className='delete-todo-btn'>Delete Todo</button>
        </div>

      </div>

      <div>
        <button className='prev' disabled={type === 'task'} onClick={prevSwitchHandler}>{"<<"}</button>
        <button className='next' disabled={type === 'done'} onClick={nextSwitchHandler}>{">>"}</button>
      </div>
    </div>
  )
}

export default Card
