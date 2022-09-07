import React, { useEffect, useState } from "react";
import styled from "styled-components";
import me from "../img/others/me.png";
import ecdl from "../img/others/ECDL_Expert.png";
import efz from "../img/others/efz_Page_1.png";
import arrow from "../img/icons/arrow.svg";
import { Title } from "../styles/index.styles";
import IconNavigation from "../components/Icon";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

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
