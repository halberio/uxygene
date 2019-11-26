import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import hostsReducer from "./hosts-reducer";
import eventsReducer from "./events-reducer";

const rootReducer = combineReducers({
  authReducer,
  usersReducer,
  hostsReducer,
  eventsReducer
});

export default rootReducer;
