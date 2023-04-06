import { createSlice } from "@reduxjs/toolkit";
import {
  addNewPostAction,
  deletePostAction,
  editPostAction,
  setPostsAction,
} from "../../actions/postsActions";
import IPost, { sortByDate } from "../../shared/types/Post";

export interface PostsState {
  value: IPost[];
}

const initialState: PostsState = {
  value: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: setPostsAction,
    deletePost: deletePostAction,
    addNewPost: addNewPostAction,
    editPost: editPostAction,
  },
});

export const { setPosts, deletePost, addNewPost, editPost } =
  postsSlice.actions;

export default postsSlice.reducer;
