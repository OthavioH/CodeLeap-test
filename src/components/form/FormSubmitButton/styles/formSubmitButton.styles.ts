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

  :after {
    content: "  ";
    left: -100%;
    clip-path: polygon(10% 0, 70% 0, 90% 100%, 30% 100%);
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 300ms ease;
  }

  &:hover::after {
    left: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #cccccc;
  }
`;
