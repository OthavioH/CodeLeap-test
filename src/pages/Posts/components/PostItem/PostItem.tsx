import IPost from "../../../../types/Post";
import formatTimeAgo from "../../../../utils/formatTimeAgo";
import {
  Post,
  PostHeader,
  PostTitle,
  PostBody,
  PostInfo,
  PostAuthor,
  PostText,
} from "./styles/PostItem.styles";

interface PostItemProps {
  post: IPost;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <Post>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
      </PostHeader>
      <PostBody>
        <PostInfo>
          <PostAuthor>@{post.username}</PostAuthor>
          <p>{formatTimeAgo(new Date(post.created_datetime))}</p>
        </PostInfo>
        <PostText>{post.content}</PostText>
      </PostBody>
    </Post>
  );
}
