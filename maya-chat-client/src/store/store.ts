import { combineReducers } from "redux";
import messageSlice from "./slices/messagesSlice";
import { configureStore } from "@reduxjs/toolkit";

// type ActionCreater<T> = (...args: any) => { type: string; payload: T };

const reduser = combineReducers({
  messages: messageSlice,
});

export type State = ReturnType<typeof reduser>;

const store = configureStore({
  reducer: reduser,
});

export default store;
