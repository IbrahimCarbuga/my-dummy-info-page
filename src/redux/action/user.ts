import { LOGIN, LOGOUT, SET_LANGUAGE } from "../actionType/user";
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

export const setLanguage = (language: string): Action => ({
  type: SET_LANGUAGE,
  payload: language,
});
