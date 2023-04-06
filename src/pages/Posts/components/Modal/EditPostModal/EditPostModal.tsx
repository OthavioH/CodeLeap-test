import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CancelButton,
  Modal,
  ModalButtons,
  ModalContent,
  ModalTitle,
  SaveButton,
} from "../styles/Modal.styles";
import IPost from "../../../../../shared/types/Post";
import FormInputLabel from "../../../../../components/form/FormInputLabel/FormInputLabel";
import FormTextInput from "../../../../../components/form/FormTextInput/FormTextInput";
import TextFieldInput from "../../../../../components/form/TextFieldInput/TextFieldInput";
import PostService from "../../../../../shared/services/PostService";
import PostServiceMock from "../../../../../shared/mocks/PostServiceMock";

interface EditPostModalProps {
  post: IPost;
  isOpen: boolean;
  closeModal: () => void;
}

export function EditPostModal({
  post,
  isOpen,
  closeModal,
}: EditPostModalProps) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const isProd = import.meta.env.PROD;
  const postService = isProd
    ? new PostService(useDispatch())
    : new PostServiceMock(useDispatch());

  async function handleSavePost() {
    const newPost = {
      ...post,
      title: title,
      content: content,
    };

    await postService.editPost(newPost);
    closeModal();
  }

  return (
    <Modal className={isOpen ? "active" : "inactive"}>
      <ModalContent>
        <ModalTitle style={{ marginBottom: "24px" }}>Edit item</ModalTitle>
        <FormInputLabel text="Title" />
        <FormTextInput
          id="title"
          placeholder="Hello world"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FormInputLabel text="Content" />
        <TextFieldInput
          id="content"
          placeholder="Content here"
          text={content}
          onChange={(e: any) => {
            setContent(e.target.value);
          }}
        />
        <ModalButtons>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <SaveButton onClick={handleSavePost}>Save</SaveButton>
        </ModalButtons>
      </ModalContent>
    </Modal>
  );
}
