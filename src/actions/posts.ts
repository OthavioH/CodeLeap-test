import { PayloadAction } from "@reduxjs/toolkit";
import { PostsState } from "../redux/posts/postsSlice";
import IPost, { IPostCreate, sortByDate } from "../types/Post";

export function setPosts(state: PostsState, action: PayloadAction<IPost[]>) {
  state.value = action.payload;
}

export function addNew(state: PostsState, action: PayloadAction<IPostCreate>) {
  const newPost = {
    id: state.value.length + 1,
    username: action.payload.username,
    created_datetime: new Date().toString(),
    title: action.payload.title,
    content: action.payload.content,
  };
  state.value.push(newPost);

  state.value = sortByDate(state.value);
}

export function resetPosts(state: PostsState) {
  state.value = [];
}
