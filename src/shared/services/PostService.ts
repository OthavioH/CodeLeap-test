import api from "../../lib/api";
import GetPostResponse from "../types/GetPostResponse";
import IPost, { IPostCreate } from "../types/Post";
import { Dispatch } from "redux";
import {
  addManyPosts,
  addNewPost,
  deletePost,
  editPost,
  setPosts,
} from "../../redux/posts/postsSlice";
import INextParameters from "../types/NextParameters";
import parseNextURL from "../utils/parseNextURL";
import {
  NextURLParametersState,
  setNextURLParameters,
} from "../../redux/nextURLParameter/nextURLParameter";

export default class PostService {
  dispatch: Dispatch;
  nextURLParameters: INextParameters;

  constructor(
    dispatchHook: Dispatch,
    nextURLParameters: NextURLParametersState
  ) {
    this.dispatch = dispatchHook;
    this.nextURLParameters = nextURLParameters;
  }

  async getPosts(): Promise<void> {
    const response = (await api.get("/careers/")).data as GetPostResponse;

    this.dispatch(setNextURLParameters(parseNextURL(response.next)));

    this.dispatch(setPosts(response.results));
  }

  async getMorePosts(): Promise<void> {
    const response = (
      await api.get(`/careers/`, {
        params: {
          limit: this.nextURLParameters.limit,
          offset: this.nextURLParameters.offset,
        },
      })
    ).data as GetPostResponse;

    this.dispatch(setNextURLParameters(parseNextURL(response.next)));
    this.dispatch(addManyPosts(response.results));
  }

  async createPost(post: IPostCreate): Promise<void> {
    try {
      const response = await api.post("/careers/", post);
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
      const response = await api.patch(`/careers/${post.id}/`, post);
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
      const response = await api.delete(`/careers/${id}/`);
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
