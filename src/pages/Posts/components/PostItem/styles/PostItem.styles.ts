import styled from "styled-components";

export const Post = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid #999999;
  border-radius: 16px;
`;

export const PostHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;

  background-color: #7695ec;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const PostTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const PostBody = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 30px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  font-size: 18px;
  color: #777777;
`;

export const PostAuthor = styled.p`
  font-weight: bold;
`;

export const PostText = styled.p`
  width: 100%;
  padding-top: 16px;
`;
