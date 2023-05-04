import React from 'react'
import { useSelector } from 'react-redux'

const UserInfo: React.FC = () => {
  const username = useSelector(state => state.user.username)

  console.log("UserInfo re rendered")

  return (
    <div>
      <h1>Your username is {username}</h1>
    </div>
  )
}

export default UserInfo
