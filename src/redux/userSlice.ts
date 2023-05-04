import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../interface/IInitialState";

const initialState: IInitialState = {
  userInfo: {
    username: 'Adi Cahya Saputra'
  },
  status: 'idle',
  error: false
}

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    editUserStart: (state) => {
      state.status = 'loading'
    },
    editUserSuccess: (state, action: { payload: IInitialState['userInfo'] }) => {
      state.status = 'idle'
      state.userInfo.username = action.payload.username
    },
    editUserError: (state) => {
      state.status = 'loading'
      state.error = true
    }
  }
})

export const { editUserStart, editUserSuccess, editUserError } = userSlice.actions
export default userSlice
