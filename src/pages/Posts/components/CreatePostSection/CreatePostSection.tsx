import { useDispatch } from "react-redux";
import FormGroup from "../../../../components/form/FormGroup/FormGroup";
import FormInputLabel from "../../../../components/form/FormInputLabel/FormInputLabel";
import FormSubmitButton from "../../../../components/form/FormSubmitButton/FormSubmitButton";
import FormTextInput from "../../../../components/form/FormTextInput/FormTextInput";
import FormTitle from "../../../../components/form/FormTitle/FormTitle";
import TextFieldInput from "../../../../components/form/TextFieldInput/TextFieldInput";
import { CreatePostForm } from "../../styles/posts.styles";
import { addNewPost, setPostList } from "../../../../redux/posts/postsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import { BaseSyntheticEvent, useState } from "react";
import IPost, { IPostCreate } from "../../../../types/Post";

export default function CreatePostSection() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const dispatch = useDispatch();

  function handleCreatePost(e: BaseSyntheticEvent) {
    e.preventDefault();

    const username = useSelector(
      (state: RootState) => state.signUpUsername.value
    );

    const post: IPostCreate = {
      username: username,
      title,
      content,
    };

    dispatch(addNewPost(post));
  }

  return (
    <CreatePostForm>
      <FormTitle title="Create a new post" />
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
        disabled={false}
        onClick={(e) => {
          handleCreatePost(e);
        }}
      />
    </CreatePostForm>
  );
}
