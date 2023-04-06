import { useDispatch } from "react-redux";
import api from "../../lib/api";
import GetPostResponse from "../types/GetPostResponse";
import IPost, { IPostCreate } from "../types/Post";
import { Dispatch } from "redux";
import {
  addNewPost,
  deletePost,
  editPost,
  setPosts,
} from "../../redux/posts/postsSlice";

export default class PostService {
  dispatch: Dispatch;
  constructor(dispatchHook: Dispatch) {
    this.dispatch = dispatchHook;
  }

  async getPosts(): Promise<IPost[]> {
    const response = (await api.get("/careers")).data as GetPostResponse;

    this.dispatch(setPosts(response.results));
    return response.results;
  }

  async createPost(post: IPostCreate): Promise<void> {
    try {
      const response = await api.post("/careers", post);
      if (response.status === 201) {
        this.dispatch(addNewPost(response.data));
      } else {
        throw new Error(`Post was not created ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async editPost(post: IPost): Promise<void> {
    try {
      const response = await api.patch(`/careers/${post.id}`, post);
      if (response.status === 200) {
        this.dispatch(editPost(post));
      } else {
        throw new Error(`Post was not edited ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(id: number): Promise<void> {
    try {
      const response = await api.delete(`/careers/${id}`);
      if (response.status === 204) {
        this.dispatch(deletePost(id));
      } else {
        throw new Error(`Post was not deleted ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
