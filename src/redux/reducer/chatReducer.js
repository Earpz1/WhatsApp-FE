import { SET_CHATS, SET_USER_INFO, SET_ACTIVE_CHAT, SET_HISTORY, NEW_MESSAGE } from '../actions'

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
// UPDATES NEEDED WITH CORRECT PAYLOADS
    case SET_ACTIVE_CHAT:
      return { ...state, activeChat: action.payload }
    
    case SET_HISTORY:
      return { ...state, user: action.payload }

    case NEW_MESSAGE:
      return { ...state, user: action.payload }

    default:
      return state

      

  }
}

export default chatReducer
