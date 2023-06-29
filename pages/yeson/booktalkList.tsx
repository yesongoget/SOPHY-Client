import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Image from 'next/image';
import BackArrow from '../../assets/icon/backarrow.svg';

const bkList = () => {
  return (
    <St.Body>
      <Layout noHeader noFooter noMenuBar>
        <St.Header>
          <St.ImageWrapper>
            <Image src={BackArrow} alt="backArrow" />
          </St.ImageWrapper>
          <St.HeaderTitle>모집 중인 북토크</St.HeaderTitle>
        </St.Header>
      </Layout>
    </St.Body>
  );
};

export default bkList;

const St = {
  Body: styled.div`
    display: flex;
    flex-direction: column;

    width: 24.375rem;
    height: 52.75rem;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 1.87rem; 

  `,
  ImageWrapper: styled.div`
    width: 24px;
    height: 24px;
  `,
  HeaderTitle: styled.div`
    font-size: 1.8rem;
    font-weight: 500;
  `,
};
