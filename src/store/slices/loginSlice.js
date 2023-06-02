// External imports
import { createSlice } from '@reduxjs/toolkit'

// Defines the initial state using the above type
const initialState = {
  isLoggedIn: false,
  userId: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
})

// Action creators used to dispatch actions to the store to update the isLoggedIn state
export const { loginSuccess, logoutSuccess, setUserId } = loginSlice.actions

// Reducer function passed to configureStore in store.ts which handles updating state in response to above actions being dispatched to the store
export default loginSlice.reducer
