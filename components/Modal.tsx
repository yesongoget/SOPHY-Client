import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ModalProps {
  title?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  width: number;
  radius?: number;
  onClickModal?: () => void;
  onClickLeftButton?: () => void;
  onClickRightButton?: () => void;
  isButtonActivated?: boolean;
}

function Modal(props: PropsWithChildren<ModalProps>) {
  const {
    title,
    leftButtonText,
    rightButtonText,
    width,
    radius,
    onClickModal,
    onClickLeftButton,
    onClickRightButton,
    isButtonActivated,
    children,
  } = props;

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClickModal) {
      onClickModal();
    }
  };

  return (
    <St.Root>
      <St.ModalContainer width={width} radius={radius}>
        <St.ModalTitle width={width}>{title}</St.ModalTitle>
        {children}
        {onClickLeftButton && onClickRightButton && (
          <St.ModalButtons>
            <St.LeftButton onClick={onClickLeftButton}>
              {leftButtonText}
            </St.LeftButton>
            {isButtonActivated !== undefined && (
              <St.RightButton
                onClick={onClickRightButton}
                isButtonActivated={isButtonActivated}>
                {rightButtonText}
              </St.RightButton>
            )}
          </St.ModalButtons>
        )}
      </St.ModalContainer>
      <St.Backdrop onClick={closeModal} />
    </St.Root>
  );
}

export default Modal;

const St = {
  Root: styled.div`
    position: fixed;
    top: 0;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `,
  ModalContainer: styled.div<{ width: number; radius?: number }>`
    position: fixed;
    width: 10rem;
    height: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    background-color: white;
    border-radius: 0.5rem;
    z-index: 10;
  `,
  ModalTitle: styled.div<{ width: number }>`
    width: 100%;
    color: gray;
    text-align: center;
  `,
  ModalButtons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 8rem;
    & > button {
      width: 3rem;
      height: 1.5rem;
      color: gray;
      border-radius: 0.5rem;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  `,
  LeftButton: styled.button`
    background-color: gray;
  `,
  RightButton: styled.button<{ isButtonActivated: boolean }>`
    background-color: ${(props) =>
      props.isButtonActivated ? 'black' : 'lightgray'};
  `,
  Backdrop: styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.4;
    z-index: 9;
    position: fixed;
  `,
};
