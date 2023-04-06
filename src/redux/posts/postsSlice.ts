import { createSlice } from "@reduxjs/toolkit";
import {
  addManyPostsAction,
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
    addManyPosts: addManyPostsAction,
    addNewPost: addNewPostAction,
    editPost: editPostAction,
  },
});

export const { setPosts, deletePost, addManyPosts, addNewPost, editPost } =
  postsSlice.actions;

export default postsSlice.reducer;
