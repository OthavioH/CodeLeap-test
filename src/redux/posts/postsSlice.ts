import { createSlice } from "@reduxjs/toolkit";
import { addNew, resetPosts, setPosts } from "../../actions/posts";
import IPost from "../../types/Post";

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
    setPostList: setPosts,
    addNewPost: addNew,
    resetPostList: resetPosts,
  },
});

export const { setPostList, addNewPost, resetPostList } = postsSlice.actions;

export default postsSlice.reducer;
