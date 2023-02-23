import { SET_CHATS, SET_USER_INFO } from '../actions'

const initialState = {
  userInfo: {},
  chats: {},
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.payload }
    case SET_USER_INFO:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default chatReducer
