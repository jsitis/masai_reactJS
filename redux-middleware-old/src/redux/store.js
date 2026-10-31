import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducer";
import { logger, delayMiddleware } from "./middleware";

//custom middleware

const store = createStore(
  counterReducer,
  applyMiddleware(logger, delayMiddleware),
);
export default store;
