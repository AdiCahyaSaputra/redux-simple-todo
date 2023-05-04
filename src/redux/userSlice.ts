import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../interface/IInitialState";

const initialState: IInitialState = {
  userInfo: {
    username: 'Adi Cahya Saputra'
  },
  status: 'idle',
  error: false
}

const edit = async (username: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(username)
    }, 1000);
  })
}

export const editUserAsync = createAsyncThunk("User/editUser", async (username: string) => {
  const updatedUsername = await edit(username)
  return updatedUsername // action.payload = Promise<string>
})

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(editUserAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(editUserAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.userInfo.username = action.payload
      })
      .addCase(editUserAsync.rejected, (state) => {
        state.status = 'loading'
        state.error = true
      })
  }
})

export default userSlice
