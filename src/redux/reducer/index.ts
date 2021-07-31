import { Reducer } from "redux";
import { LOGIN, LOGOUT } from "../actionType/user";
import { Action } from "../model/Action";
import { initialUserState, User, UserState } from "../model/user";

const userReducer: Reducer<UserState, Action> = (state: UserState = initialUserState, action: Action): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return initialUserState;
   //TODO localStorage buradan setlenebilir.
  }
  return initialUserState;
};

export default userReducer;