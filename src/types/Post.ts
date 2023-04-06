export default interface IPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface IPostCreate {
  username: string;
  title: string;
  content: string;
}

export function sortByDate(posts: IPost[]): IPost[] {
  return posts.sort((a, b) => {
    return (
      new Date(b.created_datetime).getTime() -
      new Date(a.created_datetime).getTime()
    );
  });
}
