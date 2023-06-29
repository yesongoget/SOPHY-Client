/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import sample from 'public/next.svg';
import Layout from '../../components/Layout';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const index = () => {
  const mutation = useMutation({
    mutationFn: () => {
      return fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo22',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  });

  const { isLoading, error, data } = useQuery(['repoData'], () =>
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      return res.data;
    }),
  );

  if (!data) return;

  const arr = Object.keys(data).map((key) => data[key]);
  console.log(arr);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ';

  return (
    <Layout noHeader noFooter>
      <St.Header>
        소피 웨비들
        {arr.map((obj, index) => (
          <div key={index}>
            <span>{obj.id}</span>
            <span>{obj.title}</span>
          </div>
        ))}
        <Image src={sample} alt="샘플 이미지" />
      </St.Header>
      <button onClick={() => mutation.mutate()}>투두</button>
    </Layout>
  );
};

export default index;

const St = {
  Header: styled.div`
    color: rgb(255, 192, 203);
    font-size: 8rem;
  `,
};
