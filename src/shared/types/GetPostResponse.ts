import IPost from "./Post";

export default interface GetPostResponse {
  count: number;
  next: string;
  previous: string;
  results: IPost[];
}
