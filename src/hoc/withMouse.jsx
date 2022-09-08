import React, { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export const withMouse = (Component) => (props) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const onMouseEnter = () => cursorChangeHandler("hovered");
  const onMouseLeave = () => cursorChangeHandler("");
  return (
    <div
      style={{ width: "fit-content", height: "fit-content", maxWidth: "100%" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Component props={props} onMouseLeave={onMouseLeave} />
    </div>
  );
};
