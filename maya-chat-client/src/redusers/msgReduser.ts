import { produce } from "immer";
import { ADD_MESSAGE, SET_MESSAGE } from "../actions/addMessage";

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
      return produce(crrState, (draft) => {
        draft.messages.push(action.payload);
      });

    case SET_MESSAGE:
      return produce(crrState, (draft) => {
        draft.messages.push(action.payload);
      });
    default:
      return crrState;
  }
};

export default messageReduser;
