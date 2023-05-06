import React from 'react'
import Card from './Card'

type Props = {
  type: "task" | "work" | "done"
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1, str.length)

const Kanban: React.FC<Props> = ({ type }) => {

  return (
    <div className={`kanban ${type}`}>
      <h2 className='title'>{capitalize(type)}</h2>
      <div className='card-wrapper'>

        <Card type={type} todo='Belajar Redux'/>

      </div>
    </div>
  )
}

export default Kanban
