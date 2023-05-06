import { createSlice } from "@reduxjs/toolkit"

type TypeTodo = {
  task: string,
  work: string,
  done: string
}

type Todo<TypeTodo> = {
  todos: {
    [Property in keyof TypeTodo]: string[]
  }
}

type InitialState = Todo<TypeTodo>

const initialState: InitialState = {
  todos: {
    task: [],
    work: [],
    done: []
  }
}

type TodoPayload = {
  type: "task" | "work" | "done",
  todo: string
}

const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodo: (state, action: { payload: TodoPayload['todo'] }) => {
      state.todos['task'].push(action.payload)
    },
    switchTodoType: (
      state,
      action: {
        payload: {
          type: TodoPayload['type'],
          position: number,
          switchToType: TodoPayload['type'],
          todo: TodoPayload['todo']
        }
      }) => {

      const { type, position, switchToType, todo } = action.payload

      state.todos[type].splice(position, 1)
      state.todos[switchToType].push(todo)
    }
  }
})

export const { addTodo, switchTodoType } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice
