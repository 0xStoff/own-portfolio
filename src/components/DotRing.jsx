import React, { useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouseContext";

import styled from "styled-components";

const Dot = styled.div`
  // hide on touch device
  @media (pointer: coarse) {
    display: none;
  }
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: white;

  border-radius: 100%;
  z-index: 999;

  pointer-events: none;

  transform: translate(-50%, -50%);
  transition-timing-function: ease-out;
  transition-duration: 100ms;
  will-change: width, height;

  @-moz-document url-prefix() {
    transition-duration: unset;
  }

  ${(props) =>
    props.cursorType &&
    `{
     
    width: 50px;
    height: 50px;
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
