import React from 'react'
import { useSelector } from 'react-redux'

const HelloUser: React.FC = () => {
  const username = useSelector(state => state.user.userInfo.username)
  const isLoading = useSelector(state => state.user.status) === 'loading'

  console.log("HelloUser re rendered")

  return (
    <div>
      <h1>Hello {isLoading ? '...' : username}</h1>
    </div>
  )
}

export default HelloUser
