import React from "react";
import { useState } from "react";

import styled, { css, keyframes } from "styled-components";
import { withMouse } from "../hoc/withMouse";

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
  background-color: #1f1b24;
  max-width: 250px;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
   margin-top: 5px;
  ${(props) => fade(props.showTooltip)}}
`;

const Icon = styled.img`
  width: 28px;
`;

const Caption = styled.p`
  color: #ededed;
  font-size: 0.8em;
`;

const IconNavigation = ({
  props: { tooltip, name, onClick, src, ...styles },
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const onMouseEnter = () => setShowTooltip(true);
  const onMouseLeave = () => setShowTooltip(false);

  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      {...styles}
    >
      {src && <Icon src={src} />}
      {name && <Caption>{name}</Caption>}
      {tooltip && <Tooltip showTooltip={showTooltip}>{tooltip}</Tooltip>}
    </a>
  );
};

export default withMouse(IconNavigation);
