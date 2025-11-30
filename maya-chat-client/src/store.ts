import { combineReducers, createStore } from "redux";
import messageReduser from "./redusers/msgReduser";

const reduser = combineReducers({
  message: messageReduser,
});

export type State = ReturnType<typeof reduser>;

const store = createStore(
  reduser,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;
