import { useDispatch } from "react-redux";
import FormGroup from "../../../../components/form/FormGroup/FormGroup";
import FormInputLabel from "../../../../components/form/FormInputLabel/FormInputLabel";
import FormSubmitButton from "../../../../components/form/FormSubmitButton/FormSubmitButton";
import FormTextInput from "../../../../components/form/FormTextInput/FormTextInput";
import FormTitle from "../../../../components/form/FormTitle/FormTitle";
import TextFieldInput from "../../../../components/form/TextFieldInput/TextFieldInput";
import { CreatePostForm } from "../../styles/posts.styles";
import { addNewPost } from "../../../../redux/posts/postsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import { BaseSyntheticEvent, useState } from "react";
import IPost, { IPostCreate } from "../../../../shared/types/Post";
import PostService from "../../../../shared/services/PostService";

export default function CreatePostSection() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const postService = new PostService(useDispatch());

  const username = useSelector(
    (state: RootState) => state.signUpUsername.value
  );

  async function handleCreatePost(e: BaseSyntheticEvent) {
    e.preventDefault();

    const post: IPostCreate = {
      username: username,
      title,
      content,
    };

    await postService.createPost(post);
    setTitle("");
    setContent("");
  }

  return (
    <CreatePostForm>
      <FormTitle title="What's on your mind?" />
      <FormGroup>
        <FormInputLabel text="Title" />
        <FormTextInput
          placeholder="Hello world"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <FormInputLabel text="Content" />
        <TextFieldInput
          text={content}
          placeholder="Content here"
          id="title"
          onChange={(e: BaseSyntheticEvent) => {
            setContent(e.target.value);
          }}
        />
      </FormGroup>
      <FormSubmitButton
        text="Create"
        disabled={title.length === 0 || content.length === 0}
        onClick={(e) => {
          handleCreatePost(e);
        }}
      />
    </CreatePostForm>
  );
}
