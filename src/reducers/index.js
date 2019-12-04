import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import talentsReducer from "./talents-reducer";
import hostsReducer from "./hosts-reducer";
import eventsReducer from "./events-reducer";
import interfaceReducer from "./interface-reducer";

const rootReducer = combineReducers({
  authReducer,
  talentsReducer,
  hostsReducer,
  eventsReducer,
  interfaceReducer
});

export default rootReducer;
