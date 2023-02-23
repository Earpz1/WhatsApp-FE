export const SET_CHATS = 'SAVE_USER'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'
export const SET_HISTORY = 'SET_HISTORY'
export const NEW_MESSAGE = 'NEW_MESSAGE'
export const CHECK_AUTHENTICATION = "CHECK_AUTHENTICATION";
export const SAVE_TOKEN = "SAVE_TOKEN";




export const getSocketAction = (socket) => {
    return {
      type: GET_SOCKET,
      payload: socket,
    };
  };
  
  export const saveUserAction = (user) => {
    return {
      type: SAVE_USER,
      payload: user,
    };
  };

export const getMyUserDetailsAction = (accessToken) => {
    return async (dispatch) => {
      const optionsGet = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzNjExZjJkNGFjMjlkZWNiNzhlNWMiLCJpYXQiOjE2NzY5NzMwODgsImV4cCI6MTY3NzU3Nzg4OH0.TEfdfhhYn4GDBA99-1I0cGasGA5-6tZmk0eHkia7bhV`,
          "Content-Type": "application/json",
        },
      };
      try {
        let response = await fetch(`http://localhost:3001/users/me`, optionsGet);
        if (response.ok || response.status === 204) {
          let data = await response.json();
          console.log(data);
          dispatch({
            type: SAVE_USER,
            payload: data,
          });
          dispatch({
            type: CHECK_AUTHENTICATION,
            payload: true,
          });
        } else {
          console.log("Error fetching own user data");
          dispatch({
            type: CHECK_AUTHENTICATION,
            payload: false,
          });
          dispatch({
            type: SAVE_TOKEN,
            payload: "",
          });
          dispatch({
            type: SAVE_USER,
            payload: {},
          });
        }
      } catch (error) {
        console.log("error: ", error);
        dispatch({
          type: CHECK_AUTHENTICATION,
          payload: false,
        });
        dispatch({
          type: SAVE_TOKEN,
          payload: "",
        });
        dispatch({
          type: SAVE_USER,
          payload: {},
        });
      }
    };
  };