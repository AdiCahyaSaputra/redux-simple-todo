import React from 'react'
import Card from './Card'

type Props = {
  type: "task" | "work" | "done",
  todos: string[]
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1, str.length)

const Kanban: React.FC<Props> = ({ type, todos }) => {

  return (
    <div className={`kanban ${type}`}>
      <h2 className='title'>{capitalize(type)}</h2>
      <div className='card-wrapper'>

        {todos.map((todo, index) => (
          <>
            <Card type={type} todo={todo} position={index} key={index} />
            <hr />
          </>
        ))}

      </div>
    </div>
  )
}

export default Kanban
