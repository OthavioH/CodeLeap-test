import styled from "styled-components";

export const PostsMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const PostsContainer = styled.div`
  height: fit-content;
  width: 800px;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #fff;
`;

export const PostsTitle = styled.p`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 26px 36px;

  font-size: 22px;
  font-weight: bold;
  background-color: #7695ec;
  color: #fff;
`;

export const PostsSection = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 30px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export const CreatePostForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  border: 1px solid #999999;
  border-radius: 16px;
`;

export const PostList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  list-style: none;
`;
