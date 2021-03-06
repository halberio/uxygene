import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";

const logger = createLogger({
  collapsed: true,
  duration: true,
  colors: {
    title: () => "#0294B5",
    prevState: () => "#7286E9",
    action: () => "#FF534D",
    nextState: () => "#1DB954",
    error: () => "#FF534D"
  }
});
let store = null;
if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, applyMiddleware(reduxThunk, logger));
} else {
  store = createStore(rootReducer, applyMiddleware(reduxThunk));
}
export default store;
