import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Modal from './ModalPractice';
import ModalPortal from './ModalPortal';

const Form = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  const onClickButton = () => {
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <St.FormContainer>
        <St.NameForm>
          <label>이름</label>
          <St.Input
            type="text"
            name="name"
            placeholder="이름을 입력해주세요."
            onChange={onChange}
            ref={nameInput}
          />
        </St.NameForm>
        <St.PhoneForm>
          <label>전화번호</label>
          <St.Input
            type="text"
            name="name"
            placeholder="전화번호를 입력해주세요."
            onChange={onChange}
            ref={phoneInput}
          />
        </St.PhoneForm>
        <Button type="button" onClick={onClickButton}>
          신청하기
        </Button>
        {isModalOpen && (
          <ModalPortal>
            <Modal
              open={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          </ModalPortal>
        )}
      </St.FormContainer>
    </>
  );
};

export default Form;

const St = {
  FormContainer: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    height: 16rem;
    border: 2px solid #485ab9;
  `,
  Input: styled.input`
    width: 20rem;
    height: 3rem;
    border: 1px solid #485ab9;
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
  `,
  NameForm: styled.div`
    display: flex;
    align-items: center;

    margin-top: 1rem;
  `,
  PhoneForm: styled.div`
    display: flex;
    align-items: center;
  `,
  Alert: styled.div`
    color: red;
    font-size: 0.8rem;
    border: solid 1px green;
  `,
};

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;
