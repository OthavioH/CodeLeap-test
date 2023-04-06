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

export default function Posts() {
  const navigate = useNavigate();

  const posts = useSelector((state: RootState) => state.posts.value);
  const username = useSelector(
    (state: RootState) => state.signUpUsername.value
  );

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
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
