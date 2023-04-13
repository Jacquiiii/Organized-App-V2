// External imports
import { createSlice } from '@reduxjs/toolkit'

// Defines the initial state using the above type
const initialState = {
  tasks: []
}

export const tasksSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearTasks: state => [],
    addTasks: (state, action) => [...state, action.payload]
  },
})

// Action creators used to dispatch actions to the store to update the isLoggedIn state
export const { clearTasks, addTasks } = tasksSlice.actions

// Reducer function passed to configureStore in store.ts which handles updating state in response to above actions being dispatched to the store
export default tasksSlice.reducer