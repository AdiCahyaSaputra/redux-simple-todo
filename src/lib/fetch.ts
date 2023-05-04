import { Dispatch } from "react"
import { IInitialState } from "../interface/IInitialState"
import { AnyAction } from "redux"
import { editUserError, editUserStart, editUserSuccess } from "../redux/userSlice"

const edit = async (username: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(username)
    }, 1000);
  })
}

export const editUserAsync = async (username: IInitialState['userInfo']['username'], dispatch: Dispatch<AnyAction>) => {
  dispatch(editUserStart())

  try {
    const updatedUsername = await edit(username)
    dispatch(editUserSuccess({ username: updatedUsername }))
  } catch (error) {
    dispatch(editUserError())
  }

}
