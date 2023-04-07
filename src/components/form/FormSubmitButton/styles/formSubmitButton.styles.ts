import styled, { keyframes } from "styled-components";

const shake = keyframes` 
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

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

  transform: translate3d(0, 0, 0);

  &:disabled:hover {
    animation: ${shake} 0.82s;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #cccccc;
  }

  &:hover:enabled {
    transform: scale(1.05);
  }
`;
