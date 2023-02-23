import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../reducer/chatReducer'

const store = configureStore({
  reducer: chatReducer,
 
})

export default store;
