import React from "react";
import arrow from "../img/icons/arrow.svg";
import { Title } from "../styles/index.styles";
import IconNavigation from "../components/Icon";
import { useNavigate } from "react-router-dom";

const padding = { margin: 50 };

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title style={padding}>404 Seite nicht gefunden</Title>
      <IconNavigation
        src={arrow}
        onClick={() => navigate("/home")}
        style={padding}
      />
    </>
  );
};

export default Error404;
