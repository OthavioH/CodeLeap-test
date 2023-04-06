import { useSelector } from "react-redux";
import CreatePostSection from "./components/CreatePostSection/CreatePostSection";
import PostItem from "./components/PostItem/PostItem";
import {
  PostList,
  PostsContainer,
  PostsMain,
  PostsSection,
  PostsTitle,
} from "./styles/posts.styles";
import { RootState } from "../../redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostService from "../../shared/services/PostService";

export default function Posts() {
  const navigate = useNavigate();

  const posts = useSelector((state: RootState) => state.posts.value);
  const postService = new PostService(useDispatch());
  const username = useSelector(
    (state: RootState) => state.signUpUsername.value
  );

  useEffect(() => {
    if (!username) {
      return navigate("/");
    }
    postService.getPosts();
  });

  return (
    <PostsMain>
      <PostsContainer>
        <PostsTitle>CodeLeap Network</PostsTitle>
        <PostsSection>
          <CreatePostSection />
          <PostList>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </PostList>
        </PostsSection>
      </PostsContainer>
    </PostsMain>
  );
}
