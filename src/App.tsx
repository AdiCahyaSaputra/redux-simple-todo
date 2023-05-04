import React from 'react'
import HelloUser from './components/HelloUser'
import UserInfo from './components/UserInfo'
import EditUser from './components/EditUser'

const App: React.FC = () => {
  return (
    <div>

      <HelloUser/>
      <EditUser/>
      <UserInfo/>

    </div>
  )
}

export default App
