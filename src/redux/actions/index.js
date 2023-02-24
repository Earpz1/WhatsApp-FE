import axios from 'axios';

export const SET_CHATS = "SAVE_USER";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";
export const SET_HISTORY = "SET_HISTORY";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const CHECK_AUTHENTICATION = "CHECK_AUTHENTICATION";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";

const BE_URL = process.env.BE_URL

export const fetchUserDetails = () => {
  return async (dispatch) => {
    const optionsGet = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:3001/users/me",
        optionsGet
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: SET_USER_INFO, payload: data }); // dispatch the action to update the user info in the state
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      dispatch({ type: "FETCH_USER_FAILURE", payload: error });
    }
  };
};

export const fetchUserChats = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/chats", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Users Chats:", data);
      dispatch({ type: SET_CHATS, payload: data });
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateUserDetails = (userId, updatedDetails, token) => {
  return async (dispatch) => {
    try {
      console.log("Request body:", JSON.stringify(updatedDetails));
      const { data } = await axios.put(`http://localhost:3001/users/me`, updatedDetails, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      dispatch({ type: UPDATE_USER_DETAILS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};





