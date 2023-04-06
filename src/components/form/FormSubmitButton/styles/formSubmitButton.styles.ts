import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 111px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-color: #7695ec;
  align-self: flex-end;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #cccccc;
  }
`;
