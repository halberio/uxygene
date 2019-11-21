import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
  authReducer,
  postsReducer,
  usersReducer
});

export default rootReducer;
