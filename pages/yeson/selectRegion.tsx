import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const selectRegion = () => {
  return (
    <Layout>
      <St.Header>소피 웨비들</St.Header>
    </Layout>
  );
};

export default selectRegion;

const St = {
  Header: styled.div`
    color: rgb(255, 192, 203);
    font-size: 8rem;
  `,
};