import type { Message } from "../types/msgTypes";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const SET_MESSAGE = "SET_MESSAGE";

type ActionCreater<T> = (...args: any) => { type: string; payload: T };

export const addMessage: ActionCreater<Message> = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const setMessage: ActionCreater<Message> = (message: Message) => ({
  type: SET_MESSAGE,
  payload: message,
});
