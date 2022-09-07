import React, { useEffect, useState } from "react";
import { withMouse } from "../hoc/withMouse";

import { useNavigate } from "react-router-dom";
import { MouseContext } from "../context/mouseContext";
import { NavButton, Text, Title } from "../styles/index.styles";
import Button from "../components/Button";

import styled, { keyframes, css } from "styled-components";
import Typewriter from "./Typewriter";
import github from "../img/icons/github.svg";
import notion from "../img/icons/notion.svg";
import IconNavigation from "./Icon";

const Wrapper = styled.div`
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  padding-left: 150px;
  width: fit-content;
`;

const slideIn = keyframes`
0% {
    // transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
`;

// const animation = false;

const Slide = styled.div`
  transform: translateX(-200%);
  margin-top: 100px;
  animation: ${slideIn} 3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation-delay: 3s;
  // ${(props) => fade(props.showAnimation)}}
  // animation: ${slideIn} 3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  // animation-delay: 3s;
`;

const fade = (props) =>
  props
    ? css`
        transform: translateX(-200%);
        margin-top: 100px;
        animation: ${slideIn} 3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        animation-delay: 3s;
      `
    : css``;

function Home({ ...cursorProps }) {
  return (
    <Wrapper>
      <Typewriter />
      <Slide showAnimation>
        <div style={{ display: "flex" }}>
          <IconNavigation
            src={github}
            style={{ padding: 10 }}
            target="_blank"
            href="https://github.com/0xStoff"
          />
          <IconNavigation
            href="https://0xstoff.notion.site/Hey-das-bin-ich-de-Christoph-0f7858ec70f745778bff487e749ab083"
            target="_blank"
            src={notion}
          />
        </div>

        {/* <img style={{ marginRight: 12 }} src={github} />
        <img src={notion} /> */}
        <Button destination="projects" title="Projects." />
        <Button destination="aboutme" title="About Me." />
      </Slide>
    </Wrapper>
  );
}

// const Buttons = () => {
//   const navigate = useNavigate();
//   const Mouse = () => (
//     <NavButton onClick={() => navigate("/projects")}>Projects</NavButton>
//   );
//   return withMouse(Mouse);
// };

export default Home;
