import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserAsync } from '../lib/fetch'

const EditUser: React.FC = () => {
  const username = useSelector(state => state.user.userInfo.username)
  const [usernameField, setUsernameField] = useState(username)

  const dispatch = useDispatch()

  const submitHanlder: React.FormEventHandler = (e) => {
    e.preventDefault()
    editUserAsync(usernameField, dispatch)
  }

  return (
    <div>
      <form onSubmit={submitHanlder}>
        <input type='text' placeholder='Edit Username' onChange={e => setUsernameField(e.target.value)} />
        <button type='submit'>Edit</button>
      </form>
    </div>
  )
}

export default EditUser
