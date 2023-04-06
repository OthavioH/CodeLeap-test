import styled from "styled-components";

export const SignUpMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 500px;
  height: auto;
  background-color: #fff;
  border-radius: 16px;
  border: 1px #cccccc solid;
`;

export const SignUpTitle = styled.h2`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  margin-bottom: 24px;
`;

export const SignUpLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px #777777 solid;
  margin-bottom: 16px;

  &::placeholder {
    color: #cccccc;
  }
`;

export const SignUpEnterButton = styled.button`
  width: 111px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-color: #7695ec;
  align-self: flex-end;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
