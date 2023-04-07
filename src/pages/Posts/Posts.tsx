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
import { Waypoint } from "react-waypoint";

export default function Posts() {
  const navigate = useNavigate();

  const posts = useSelector((state: RootState) => state.posts.value);
  const nextURLParameter = useSelector((state: RootState) => state.nextURL);

  const postService = new PostService(useDispatch(), nextURLParameter);
  const username = useSelector(
    (state: RootState) => state.signUpUsername.value
  );

  useEffect(() => {
    document.title = "CodeLeap | Posts";
    if (!username) {
      return navigate("/");
    }
    getPosts();
  }, []);

  async function getPosts() {
    await postService.getPosts();
  }

  async function getMorePosts() {
    if (posts.length > 0) {
      await postService.getMorePosts();
    }
  }

  return (
    <PostsMain>
      <PostsContainer>
        <PostsTitle>CodeLeap Network</PostsTitle>
        <PostsSection>
          <CreatePostSection />
          <PostList>
            {posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                isEditable={post.username == username}
              />
            ))}
            {posts.length > 0 && <Waypoint onEnter={getMorePosts} />}
          </PostList>
        </PostsSection>
      </PostsContainer>
    </PostsMain>
  );
}
