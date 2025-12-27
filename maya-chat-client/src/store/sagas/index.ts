import createSagaMiddleware from "redux-saga";
// import { put, takeEvery } from 'redux-saga/effects'

const sagaMiddlerware = createSagaMiddleware();

export function* rootSaga() {
  // yield takeEvery("New")
}

export default sagaMiddlerware;
