import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NextSvg from '../../public/next.svg';

const YesonPage = () => {
  return (
    <>
      <St.Header>예손의 페이지입니당</St.Header>
      <Image src={NextSvg} alt="next" />
    </>
  );
};

const St = {
  Header: styled.div`
    color: #832333;
    font-size: 9rem;
  `,
};

export default YesonPage;
