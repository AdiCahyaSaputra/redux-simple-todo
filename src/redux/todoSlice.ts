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
    },
    editTodo: (state, action: {
      payload: {
        editTodoInfo: TodoPayload,
        position: number,
      }
    }) => {
      const { editTodoInfo, position } = action.payload

      state.todos[editTodoInfo.type].splice(position, 1, editTodoInfo.todo)
    },
    deleteTodo: (state, action: {
      payload: {
        type: TodoPayload['type'],
        position: number
      }
    }) => {
      state.todos[action.payload.type].splice(action.payload.position, 1)
    }
  }
})

export const { addTodo, switchTodoType, editTodo, deleteTodo } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice
