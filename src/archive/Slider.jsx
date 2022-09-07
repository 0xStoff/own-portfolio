import React from "react";

import styled from "styled-components";

const Slide = styled.div`
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  //   position: absolute;
`;

// opacity: ${({ index, slideIndex }) => (slideIndex === index + 1 ? 1 : 0)};
// transition: opacity ease-in-out 0.4s;

const Image = styled.img`
  opacity: ${({ index, slideIndex }) => (slideIndex === index + 1 ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
  height: 100%;
  object-fit: cover;
  width: 100%;

  @media (max-width: 768px) {
    max-height: 450px;
    object-position: top;
    width: 100%;
  }
`;

const Slider = ({ data, index, slideIndex }) => {
  return (
    //   <Slide index={index} slideIndex={slideIndex}>
    //   <Image src={data.imgs ? data.imgs[slideIndex] : data.url} />
    // </Slide>
    // <Slide index={index} slideIndex={slideIndex}>
    //   <Image src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`} />
    // </Slide>

    // <Slide index={index} slideIndex={slideIndex}>
    <Image
      index={index}
      slideIndex={slideIndex}
      key={data.id}
      src={data.imgs ? data.imgs[slideIndex] : data.url}
      // src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`}
    />
    // </Slide>
  );
};

export default Slider;
