import { read } from 'fs';
import React, { useState } from 'react';
import styled from 'styled-components';

const MyForm = () => {
  const [readInfo, setReadInfo] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleReadInfoChange = () => {
    setReadInfo(!readInfo);
  };

  const handleAgreePolicyChange = () => {
    setAgreePolicy(!agreePolicy);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (readInfo && agreePolicy) {
      setIsSubmited(true);
    } else {
      alert('모두 동의해야 신청이 가능합니다.');
    }
  };

  return (
    <>
      <St.FormContainer>
        <St.Form onSubmit={handleSubmit}>
          <label>
            <input
              type="checkbox"
              checked={readInfo}
              onChange={handleReadInfoChange}
            />
            북토크 정보 및 장소를 확인하였습니다.
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreePolicy}
              onChange={handleAgreePolicyChange}
            />
            개인정보 수집 및 이용에 동의합니다.
          </label>
          <br />
          <St.Submit type="submit">신청하기</St.Submit>
          {isSubmited && <div>신청이 완료되었습니다.</div>}
        </St.Form>
      </St.FormContainer>
    </>
  );
};

const St = {
  FormContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 16rem;
    border: 2px solid #485ab9;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #832333;
    font-size: 1rem;
  `,
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
  `,
  Submit: styled.button`
    width: 10rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    background-color: #0457f2;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
  `,
};

export default MyForm;
