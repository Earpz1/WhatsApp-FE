import {
  SET_CHATS,
  SET_USER_INFO,
  SET_ACTIVE_CHAT,
  SET_HISTORY,
  NEW_MESSAGE,
} from "../actions";

const initialState = {
  userInfo: {},
  chats: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.payload };

    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };

    case SET_ACTIVE_CHAT:
      // TODO: handle SET_ACTIVE_CHAT action
      return state;

    case SET_HISTORY:
      // TODO: handle SET_HISTORY action
      return state;

    case NEW_MESSAGE:
      // TODO: handle NEW_MESSAGE action
      return state;

    default:
      return state;
  }
};

export default chatReducer;
