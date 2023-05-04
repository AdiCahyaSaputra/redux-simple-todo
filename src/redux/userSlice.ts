import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  username: string
}

const initialState: TInitialState = {
  username: 'Adi Cahya Saputra'
}

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    editUser: (state, action) => {
      state.username = action.payload.username
    }
  }
})

export const { editUser } = userSlice.actions
export default userSlice
