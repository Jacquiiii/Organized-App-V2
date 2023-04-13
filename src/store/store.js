// External imports
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Slices
import loginReducer from './features/loginSlice'
import { usersAPI } from './features/usersApiSlice'
import { tasksAPI } from './features/tasksApiSlice'

// Config for persisting state on refresh
const persistConfig = { key: 'root', storage}
const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [tasksAPI.reducerPath]: tasksAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersAPI.middleware).concat(tasksAPI.middleware)
})

const persistor = persistStore(store)

export { store, persistor }
