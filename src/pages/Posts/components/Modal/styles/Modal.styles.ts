import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  background-color: rgba(119, 119, 119, 0.8);
  z-index: 9999;

  &.active {
    display: flex;
  }

  &.inactive {
    display: none;
  }
`;

export const ModalContent = styled.div`
  width: 660px;
  height: fit-content;
  min-height: 140px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: #fff;
  border: 1px solid #999999;
  border-radius: 16px;
`;

export const ModalTitle = styled.p`
  width: 100%;
  height: fit-content;

  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const ModalButtons = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
`;

export const ModalButton = styled.button`
  width: 120px;
  height: 32px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CancelButton = styled(ModalButton)`
  border: 1px solid #999999;
  background-color: none;
`;

export const DeleteButton = styled(ModalButton)`
  border: none;
  background-color: #ff5151;

  color: #fff;
`;

export const SaveButton = styled(DeleteButton)`
  background-color: #47b960;
  color: #fff;
`;
