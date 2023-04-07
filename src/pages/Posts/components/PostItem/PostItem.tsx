import IPost from "../../../../shared/types/Post";
import formatRelativeTime from "../../../../shared/utils/formatRelativeTime";
import {
  Post,
  PostHeader,
  PostTitle,
  PostBody,
  PostInfo,
  PostAuthor,
  PostText,
  Icon,
  IconRow,
} from "./styles/PostItem.styles";
import editPostIcon from "../../../../assets/pencil_icon.png";
import deletePostIcon from "../../../../assets/delete_forever.png";
import { useState } from "react";
import { DeletePostModal } from "../Modal/DeletePostModal/DeletePostModal";
import { EditPostModal } from "../Modal/EditPostModal/EditPostModal";

interface PostItemProps {
  post: IPost;
  isEditable: boolean;
}

export default function PostItem({ post, isEditable }: PostItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  return (
    <>
      {isDeleteModalOpen && (
        <DeletePostModal
          postId={post.id}
          isOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
        />
      )}

      {isEditModalOpen && (
        <EditPostModal
          post={post}
          isOpen={isEditModalOpen}
          closeModal={closeEditModal}
        />
      )}
      <Post>
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          {isEditable && (
            <IconRow>
              <Icon
                src={deletePostIcon}
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
              />
              <Icon
                src={editPostIcon}
                onClick={() => {
                  setIsEditModalOpen(true);
                }}
              />
            </IconRow>
          )}
        </PostHeader>
        <PostBody>
          <PostInfo>
            <PostAuthor>@{post.username}</PostAuthor>
            <p>{formatRelativeTime(new Date(post.created_datetime))}</p>
          </PostInfo>
          <PostText>{post.content}</PostText>
        </PostBody>
      </Post>
    </>
  );
}
