import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import Slider, { CustomArrowProps } from 'react-slick';
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
  interface ArrowProps extends CustomArrowProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }
  const CustomPrevArrow: FC<ArrowProps> = ({ className, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        <Image src={arrow_left} width={30} height={30} alt="이전" />
      </button>
    );
  };
  const CustomNextArrow: FC<ArrowProps> = ({ className, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        <Image src={arrow_right} width={30} height={30} alt="이전" />
      </button>
    );
  };
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    // centerMode: true,
    nextArrow: <CustomPrevArrow />,
    prevArrow: <CustomNextArrow />,

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
        <Slider {...settings}>
          {SLIDERDATA.map((data) => (
            <SliderItem key={data.id}>
              <Image src={data.image} width={300} height={300} alt="이전" />
              <h1>{data.id}</h1>
            </SliderItem>
          ))}
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

const SliderItem = styled.div`
  border: solid 2px red;
  width: 300px;
  height: 300px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  /* position: relative; */
  border: solid 2px green;
  margin: auto auto;
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

const SLIDERDATA = [
  {
    id: 1,
    image: category_img_1,
  },
  {
    id: 2,
    image: categroy_img_2,
  },
  {
    id: 3,
    image: categroy_img_3,
  },
  {
    id: 4,
    image: categroy_img_4,
  },
  {
    id: 5,
    image: categroy_img_5,
  },
  {
    id: 6,
    image: categroy_img_6,
  },
  {
    id: 7,
    image: category_img_7,
  },
  {
    id: 8,
    image: category_img_8,
  },
  {
    id: 9,
    image: category_img_1,
  },
];
