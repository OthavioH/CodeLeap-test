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

  @media (max-width: 600px) {
    width: 100%;
  }
`;
