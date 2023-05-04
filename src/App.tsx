import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './redux/userSlice'
import HelloUser from './components/HelloUser'
import UserInfo from './components/UserInfo'

const App: React.FC = () => {
  const username = useSelector(state => state.user.username)
  const [usernameField, setUsernameField] = useState(username)

  const dispatch = useDispatch()

  const submitHanlder: React.FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(editUser({ username: usernameField }))
  }

  return (
    <div>

      <HelloUser/>

      <div>
        <form onSubmit={submitHanlder}>
          <input type='text' placeholder='Edit Username' onChange={e => setUsernameField(e.target.value)} />
          <button type='submit'>Edit</button>
        </form>
      </div>

      <UserInfo/>

    </div>
  )
}

export default App
