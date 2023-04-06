import { combineReducers } from "redux";
import usernameSlice from "./username/usernameSlice";
import postsSlice from "./posts/postsSlice";

const rootReducer = combineReducers({
  signUpUsername: usernameSlice,
  posts: postsSlice,
});

export default rootReducer;
