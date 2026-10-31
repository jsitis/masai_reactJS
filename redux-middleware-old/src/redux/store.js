import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducer";

//custom middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Middleware Intercepted:", action);

  next(action);
};

const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));
export default store;
