import React from "react";
import {withMouse} from "../hoc/withMouse";

import {useNavigate} from "react-router-dom";
import {MouseContext} from "../context/mouseContext";
import {NavButton, Text} from "../styles/index.styles";

function Button({props: {destination, title, setShowTypewriter}, onMouseLeave, ...otherProps}) {
    const navigate = useNavigate();

    return (<NavButton
        onClick={() => {
            setShowTypewriter(false)
            navigate(`/${destination}`);
            onMouseLeave();
        }}
        {...otherProps}
    >
        {title}
    </NavButton>);
}

export default withMouse(Button);
