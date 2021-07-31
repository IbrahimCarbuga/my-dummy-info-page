import { LOGIN, LOGOUT } from "../actionType/user";
import { Action } from "../model/Action";
import { User } from "../model/user";

export const loginUser = (user: User): Action => ({
    type: LOGIN,
    payload: user,
  });

  export const logoutUser = (): Action => ({
    type: LOGOUT,
    payload: {},
  });