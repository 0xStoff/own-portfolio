import React, { useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouseContext";

import styled from "styled-components";

const Dot = styled.div`
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: white;

  border-radius: 100%;
  z-index: 999;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;

  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};

  &${(props) =>
    props.cursorType &&
    `{
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    will-change: width, height, transform, border;
    mix-blend-mode: difference;
  }`}
`;

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <Dot cursorType={cursorType} style={{ left: `${x}px`, top: `${y}px` }} />
  );
};

export default DotRing;
