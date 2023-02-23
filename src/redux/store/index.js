import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../reducer/chatReducer'

const store = configureStore({
  reducer: chatReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
})

export default store;
