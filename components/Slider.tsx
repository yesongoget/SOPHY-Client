import React, { Component, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import category_img_1 from '../assets/img/category_img_1.png';
import categroy_img_2 from '../assets/img/category_img_2.png';
import categroy_img_3 from '../assets/img/category_img_3.png';
import categroy_img_4 from '../assets/img/category_img_4.png';
import categroy_img_5 from '../assets/img/category_img_5.png';
import categroy_img_6 from '../assets/img/category_img_6.png';
import category_img_7 from '../assets/img/category_img_7.png';
import category_img_8 from '../assets/img/category_img_8.png';
import arrow_right from '../assets/icon/arrow_right.svg';
import arrow_left from '../assets/icon/arrow_left.svg';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Arrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}
const MySlider = () => {
  const arrowRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h2> Multiple items </h2>
      <Container>
        <Slider ref={arrowRef} {...settings}>
          <div className="card">
            <Image src={category_img_1} alt="카테고리이미지1" />
            <h3>1</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={categroy_img_2} alt="카테고리이미지2" />
            <h3>2</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={categroy_img_3} alt="카테고리이미지3" />
            <h3>3</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={categroy_img_4} alt="카테고리이미지4" />
            <h3>4</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={categroy_img_5} alt="카테고리이미지5" />
            <h3>5</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={categroy_img_6} alt="카테고리이미지6" />
            <h3>6</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={category_img_7} alt="카테고리이미지7" />
            <h3>7</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={category_img_8} alt="카테고리이미지8" />
            <h3>8</h3>
            <p>We use react-slick</p>
          </div>
          <div className="card">
            <Image src={category_img_1} alt="카테고리이미지1" />
            <h3>9</h3>
            <p>We use react-slick</p>
          </div>
        </Slider>
        {/*       
      <Buttons>
        <BackArrow type="button" onClick={()=>arrowRef.current?.SlickPrev()}>
          <Image src={arrow_left} width={30} height={30} alt="이전" />
        </BackArrow>
        <NextArrow type="button" onClick={()=>arrowRef.current?.SlickNext()} >
          <Image src={arrow_right} width={30} height={30} alt="다음" />
        </NextArrow>
      </Buttons> */}
      </Container>
    </>
  );
};

export default MySlider;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #3d3d3d;
    cursor: pointer;
    color: #01a5a0;
    border: none;
    position: absolute;
    top: 50%;
    right: -1rem;
  }

  Image {
    width: 30px;
    height: 30px;
  }
`;

const BackArrow = styled.button`
  left: -1rem;
`;

const NextArrow = styled.button`
  right: -1rem;
`;
/*
const StyledSlider = styled(Slider)``*/
