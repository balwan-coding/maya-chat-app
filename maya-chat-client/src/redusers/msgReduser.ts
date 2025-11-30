import { ADD_MESSAGE } from "../actions/addMessage";
import { SET_MESSAGE } from "../actions/setMessage";
import type { Message } from "../types/msgTypes";

export interface messageState {
  messages: Message[];
}

export const messageInitialState: messageState = {
  messages: [],
};

const messageReduser = (
  crrState = messageInitialState,
  action: any
): messageState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...crrState, messages: [...crrState.messages, action.payload] };
    case SET_MESSAGE:
      return { ...crrState, messages: action.payload };
    default:
      return crrState;
  }
};

export default messageReduser;
