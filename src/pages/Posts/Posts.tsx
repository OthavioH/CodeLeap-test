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

export default function Posts() {
  const posts = useSelector((state: RootState) => state.posts.value);

  return (
    <PostsMain>
      <PostsContainer>
        <PostsTitle>CodeLeap Network</PostsTitle>
        <PostsSection>
          <CreatePostSection />
          <PostList>
            <PostItem
              post={{
                id: 1,
                title: "Post 1",
                content:
                  "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.",
                username: "user1",
                created_datetime: new Date(),
              }}
            />
          </PostList>
        </PostsSection>
      </PostsContainer>
    </PostsMain>
  );
}
