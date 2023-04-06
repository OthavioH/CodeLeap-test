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

  const handleDeletePost = () => {
    dispatch(deletePost(postId));
    closeModal();
  };

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
