import { Reducer } from "redux";
import { LOGIN, LOGOUT, SET_LANGUAGE } from "../actionType/user";
import { Action } from "../model/Action";
import { initialUserState, UserState } from "../model/user";

const userReducer: Reducer<UserState, Action> = (
  state: UserState = initialUserState,
  action: Action
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return initialUserState;

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
  }
  return initialUserState;
};

export default userReducer;
