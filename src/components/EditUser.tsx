import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserAsync } from '../redux/userSlice'

const EditUser: React.FC = () => {
  const username = useSelector(state => state.user.userInfo.username)
  const isLoading = useSelector(state => state.user.status) === 'loading'

  const [usernameField, setUsernameField] = useState(username)
  const dispatch = useDispatch()

  const submitHanlder: React.FormEventHandler = (e) => {
    e.preventDefault()

    // @ts-ignore
    dispatch(editUserAsync(usernameField))
  }

  return (
    <div>
      <form onSubmit={submitHanlder}>
        <input type='text' placeholder='Edit Username' onChange={e => setUsernameField(e.target.value)} />
        <button type='submit' disabled={isLoading}>Edit</button>
      </form>
    </div>
  )
}

export default EditUser
