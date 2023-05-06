import React from 'react'

type Props = {
  todo: string,
  type: "task" | "work" | "done"
}

const Card: React.FC<Props> = ({ todo, type }) => {
  return (
    <div className='card'>
      <p>{todo}</p>

      <div>
        <button className='prev' disabled={type === 'task'}>{"<<"}</button>
        <button className='next' disabled={type === 'done'}>{">>"}</button>
      </div>
    </div>
  )
}

export default Card
