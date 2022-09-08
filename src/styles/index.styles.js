import styled, { keyframes } from "styled-components";

const NavButton = styled.h2`
  color: #fff;
  font-size: 2em;
  line-height: 0.8;
  // padding: 10px;
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 1em;
  text-align: justify;
`;

const Text = styled.p`
  color: #fff;
  font-size: 1em;
  text-align: justify;
`;

const List = styled.li`
  color: #fff;
  font-size: 1em;
  text-align: left;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3em;
  line-height: 1.2;
`;

const animloader = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
}
100% {
  transform: scale(1);
  opacity: 0;
}
`;

// const spin = keyframes`
// {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }`;

// const Loader = styled.div`
//   position: fixed;
//   top: 300px;
//   left: 600px;
//   border: 16px solid #f3f3f3;
//   border-top: 16px solid #3498db;
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   animation: ${spin} 2s linear infinite;
// `;

const Loader = styled.span.attrs(({ type }) => ({
  type: type || "div",
}))`
  display: inline-block;
  position: relative;
  z-index: 999;

  :after,
  :before {
    content: "";
    box-sizing: border-box;

    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animloader} 3s linear infinite;

    border: 2px solid rgba(255, 255, 255, 0.5);
    ${({ borderWidth, width, height }) => ({
      width: width,
      height: height,
      borderWidth: borderWidth,
    })};
  }
  :after {
    animation-delay: 1.5s;
  }
  ${(props) => ({ ...props })};
`;

export { List, Loader, NavButton, Subtitle, Text, Title };
