import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
const fade = (props) =>
  props
    ? css`
        animation: ${fadeIn} 0.8s;
        transition: 0.8s;
        visibility: visible;
      `
    : css`
        animation: ${fadeOut} 0.8s;
        transition: 0.8s;
        visibility: hidden;
      `;

const Tooltip = styled.div`
  color: #fff;
  background-color: #edb260;
  max-width: 250px;
  position: absolute;
  padding: 10px;
  border-radius: 10px;
  margin-left: 50px;
  ${(props) => fade(props.showTooltip)}}
`;

const Wrapper = styled.div`
  display: flex;
  hyphens: auto;
  justify-content: space-between;

  // padding: 30px;
  // border-radius: 10px;
  // background-color: #edb260;

  overflow: hidden;
  // max-height: 0;
  transition: all 0.5s ease-in-out;
`;

export const withTooltip = (Component) => (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnter = () => setShowTooltip(true);
  const onMouseLeave = () => setShowTooltip(false);

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Component props={props} />
      {/* {showTooltip && ( */}
      <Tooltip showTooltip={showTooltip}>{props.children}</Tooltip>
      {/* )} */}
    </Wrapper>
  );
};
