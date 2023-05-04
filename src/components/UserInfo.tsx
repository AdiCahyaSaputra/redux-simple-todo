import React from 'react'
import { useSelector } from 'react-redux'

const UserInfo: React.FC = () => {
  const username = useSelector(state => state.user.userInfo.username)
  const isLoading = useSelector(state => state.user.status) === 'loading'

  console.log("UserInfo re rendered")

  return (
    <div>
      <h1>Your username is {isLoading ? '...' : username}</h1>
    </div>
  )
}

export default UserInfo
