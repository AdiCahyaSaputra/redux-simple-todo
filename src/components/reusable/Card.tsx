import React, { MouseEventHandler } from 'react'
import { switchTodoType } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'

type Props = {
  todo: string,
  type: "task" | "work" | "done",
  position: number
}

const types: Props['type'][] = ["task", "work", "done"]

const Card: React.FC<Props> = ({ todo, type, position }) => {

  const dispatch = useDispatch()

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

  return (
    <div className='card'>
      <p>{todo}</p>

      <div>
        <button className='prev' disabled={type === 'task'} onClick={prevSwitchHandler}>{"<<"}</button>
        <button className='next' disabled={type === 'done'} onClick={nextSwitchHandler}>{">>"}</button>
      </div>
    </div>
  )
}

export default Card
