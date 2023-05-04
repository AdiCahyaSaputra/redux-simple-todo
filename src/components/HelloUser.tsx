import React from 'react'
import { useSelector } from 'react-redux'

const HelloUser: React.FC = () => {
  const username = useSelector(state => state.user.username)

  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  )
}

export default HelloUser
