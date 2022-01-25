import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";
// ======== Compose redux dev tool with applyMiddleware ========
const saga = createSagaMiddleware();

const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(rootReducer, enhancer);

saga.run(rootSaga);

export default store;
