import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../Slice/CouterSlice";
import postReducer from "../Slice/postSlice";

import createSagaMiddleware from "redux-saga";
import { helloSaga } from "../../Saga/Saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  counter: counterReducer,
  posts: postReducer,
});
const store = configureStore({
  reducer: rootReducers,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(helloSaga);

export default store;
