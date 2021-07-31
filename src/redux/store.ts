import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import rootReducer from "./reducer";
import { UserState } from "./model/user";
import { Action } from "./model/Action";

const createAppStore = () => {
  let storeEnhancer = applyMiddleware(thunk as ThunkMiddleware<UserState, Action>);

  const store = createStore(rootReducer, storeEnhancer);
  return store;
};

export default createAppStore;