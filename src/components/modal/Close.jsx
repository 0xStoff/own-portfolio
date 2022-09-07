import React from "react";
import { CloseIcon } from "./index.styles";

import icon from "../../img/icons/close.svg";
import { withMouse } from "../../hoc/withMouse";

const Close = ({ props: { onClick } }) => (
  <CloseIcon onClick={onClick} src={icon} />
);

export default withMouse(Close);
