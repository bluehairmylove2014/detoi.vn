// This reducer handles actions to get and set the authentication token

import { AuthAction, AuthState } from ".";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  try {
    switch (action.type) {
      case "SET_ACTION":
        // Returns a new state with the new token when the action is to set the token
        return {
          ...state,
          token: action.payload,
        };
      case "SET_REFRESH_ACTION":
        // Returns a new state with the new token when the action is to set the token
        return {
          ...state,
          refreshToken: action.payload,
        };
      case "SET_ALL_ACTION":
        // Returns a new state with the new token when the action is to set the token
        return action.payload;
      default:
        // Returns the current state for any other action
        return state;
    }
  } catch (error) {
    console.error("Error in authReducer: ", error);
    return state;
  }
};
