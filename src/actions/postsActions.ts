import { PayloadAction } from "@reduxjs/toolkit";
import { PostsState } from "../redux/posts/postsSlice";
import IPost, { IPostCreate, sortByDate } from "../shared/types/Post";

export function setPostsAction(
  state: PostsState,
  action: PayloadAction<IPost[]>
) {
  state.value = sortByDate(action.payload);
}

export function addManyPostsAction(
  state: PostsState,
  action: PayloadAction<IPost[]>
) {
  state.value = sortByDate([...state.value, ...action.payload]);
}

export function deletePostAction(
  state: PostsState,
  action: PayloadAction<number>
) {
  const newPostList = state.value.filter((post) => post.id !== action.payload);
  state.value = sortByDate(newPostList);
}

export function addNewPostAction(
  state: PostsState,
  action: PayloadAction<IPost>
) {
  state.value.push(action.payload);

  state.value = sortByDate(state.value);
}

export function editPostAction(
  state: PostsState,
  action: PayloadAction<IPost>
) {
  const newPostList = state.value.map((post) => {
    if (post.id === action.payload.id) {
      return action.payload;
    }
    return post;
  });

  state.value = sortByDate(newPostList);
}
