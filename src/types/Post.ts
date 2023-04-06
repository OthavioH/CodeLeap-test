export default interface IPost {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export interface IPostCreate {
  username: string;
  title: string;
  content: string;
}
