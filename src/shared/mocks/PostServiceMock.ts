import api from "../../lib/api";
import IPost, { IPostCreate } from "../types/Post";
import { Dispatch } from "redux";
import {
  addNewPost,
  deletePost,
  editPost,
  setPosts,
} from "../../redux/posts/postsSlice";

import postsMock from "./postsMock.json";

export default class PostServiceMock {
  dispatch: Dispatch;
  constructor(dispatchHook: Dispatch) {
    this.dispatch = dispatchHook;
  }

  async getPosts(): Promise<IPost[]> {
    const posts = JSON.parse(JSON.stringify(postsMock));

    this.dispatch(setPosts(posts));
    return posts;
  }

  async createPost(post: IPostCreate): Promise<void> {
    try {
      this.dispatch(addNewPost(post));
    } catch (error) {
      console.log(error);
    }
  }

  async editPost(post: IPost): Promise<void> {
    try {
      this.dispatch(editPost(post));
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(id: number): Promise<void> {
    try {
      this.dispatch(deletePost(id));
    } catch (error) {
      console.log(error);
    }
  }
}
