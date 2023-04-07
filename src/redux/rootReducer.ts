import { combineReducers } from "redux";
import usernameSlice from "./username/usernameSlice";
import postsSlice from "./posts/postsSlice";
import nextURLParametersSlice from "./nextURLParameter/nextURLParameter";

const rootReducer = combineReducers({
  signUpUsername: usernameSlice,
  posts: postsSlice,
  nextURL: nextURLParametersSlice,
});

export default rootReducer;
