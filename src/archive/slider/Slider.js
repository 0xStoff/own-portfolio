import React, { useState } from "react";
import styled from "styled-components";
import "./slider.css";

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${({ index, slideIndex }) => (slideIndex === index + 1 ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  setTimeout(() => {
    nextSlide();
  }, 2000);

  const nextSlide = () => {
    // img array length
    if (slideIndex !== 5) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 5) {
      setSlideIndex(1);
    }
  };

  return (
    <>
      {[1, 2, 3, 4, 5].map((obj, index) => {
        return (
          <Slide key={obj.id} index={index} slideIndex={slideIndex}>
            <Image src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`} />
          </Slide>
        );
      })}
    </>
  );
}

// import React, { useState, useRef, useEffect } from "react";

// import { Card, TextWrapper, Wrapper } from "./index.styles";
// import { Loader, Text, Title } from "../../styles/index.styles";
// import { withMouse } from "../../HOC/withMouse";
// import styled, { keyframes } from "styled-components";
// import img1 from "../../img/greifautomat.png";
// import img2 from "../../img/komponenten-baum.png";
// import CardSkeleton from "./CardSkeleton";
// import Slider from "./Slider";

// const Slide = styled.div`
//   // width: 50%;
//   // height: 100%;
//   // object-fit: cover;
//   // position: absolute;
//   opacity: ${({ index, slideIndex }) => (slideIndex === index + 1 ? 1 : 0)};
//   transition: opacity ease-in-out 0.4s;
// `;

// // opacity: ${({ index, slideIndex }) => (slideIndex === index + 1 ? 1 : 0)};
// // transition: opacity ease-in-out 0.4s;

// const Image = styled.img`
//   // opacity: ${({ index, slideIndex }) => (slideIndex === index + 1 ? 1 : 0)};
//   // transition: opacity ease-in-out 0.4s;

//   height: 100%;
//   object-fit: cover;
//   width: 50%;

//   @media (max-width: 768px) {
//     max-height: 450px;
//     object-position: top;
//     width: 100%;
//   }
// `;

// const padding = { padding: "0 30px" };

// const CardComponent = ({
//   props: { data, index, onClick },
//   loading = false,
// }) => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   setTimeout(() => {
//     nextSlide();
//   }, 2000);

//   const nextSlide = () => {
//     // img array length
//     if (slideIndex !== 5) {
//       setSlideIndex(slideIndex + 1);
//     } else if (slideIndex === 5) {
//       setSlideIndex(1);
//     }
//   };

//   return (
//     <Wrapper>
//       <Card onClick={() => onClick(data)}>
//         {loading ? (
//           <CardSkeleton />
//         ) : (
//           <>
//             <Image
//               // index={data.id}
//               // slideIndex={slideIndex}
//               // src={data.imgs ? data.imgs[slideIndex] : data.url}
//               src={data.url}
//             />
//             <TextWrapper>
//               <Title style={padding}>{data.title}</Title>
//               <Text style={padding}>
//                 {data.description.length > 450
//                   ? data.description.substring(0, 450) + "..."
//                   : data.description}
//               </Text>
//             </TextWrapper>
//           </>
//         )}
//       </Card>
//     </Wrapper>
//   );
// };

// export default withMouse(CardComponent);
