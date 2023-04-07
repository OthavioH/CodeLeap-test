import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../../redux/posts/postsSlice";
import {
  CancelButton,
  DeleteButton,
  Modal,
  ModalButtons,
  ModalContent,
  ModalTitle,
} from "../styles/Modal.styles";
import PostService from "../../../../../shared/services/PostService";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux";

interface DeletePostModalProps {
  postId: number;
  isOpen: boolean;
  closeModal: () => void;
}

export function DeletePostModal({
  postId,
  isOpen,
  closeModal,
}: DeletePostModalProps) {
  const dispatch = useDispatch();

  const nextURLParameter = useSelector((state: RootState) => state.nextURL);
  const postService = new PostService(useDispatch(), nextURLParameter);

  async function handleDeletePost() {
    await postService.deletePost(postId);
    closeModal();
  }

  return (
    <Modal className={isOpen ? "active" : "inactive"}>
      <ModalContent>
        <ModalTitle>Are you sure you want to delete this post?</ModalTitle>
        <ModalButtons>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <DeleteButton onClick={handleDeletePost}>Delete</DeleteButton>
        </ModalButtons>
      </ModalContent>
    </Modal>
  );
}
