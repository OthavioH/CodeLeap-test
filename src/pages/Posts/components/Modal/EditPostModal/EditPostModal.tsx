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
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux";

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

  const nextURLParameter = useSelector((state: RootState) => state.nextURL);

  const postService = new PostService(useDispatch(), nextURLParameter);

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
