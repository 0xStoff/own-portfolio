import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Projects from "./Projects";
import Home from "./Home";
import AboutMe from "./AboutMe";

import IconNavigation from "../components/Icon";
import iconBack from "../img/icons/arrow.svg";
import iconForward from "../img/icons/next.svg";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import Error404 from "./404";
import Button from "../components/Button";

const iconLeft = {
  right: "50px",
};

const iconRight = {
  right: "50px",
  top: "80px",
};

const navStyle = {
  // alignItems: "flex-end",
  // display: "flex",
  // flexDirection: "column",
  // display: "none",
  position: "fixed",
  top: "50px",
  zIndex: 99,
};

const Circ = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  background-color: #121212;
  position: fixed;
  top: -130px;
  right: -130px;
  z-index: 9;
`;

export default function Layout() {
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const scroll = (event) => {
      if (window.scrollY > 300) setShowNav(false);
      else setShowNav(true);
    };
    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/aboutme"
        element={
          <>
            {showNav && (
              <>
                <IconNavigation
                  name="home"
                  onClick={() => navigate("/home")}
                  // src={iconBack}
                  style={{ ...navStyle, ...iconLeft }}
                />
                <IconNavigation
                  name="projects"
                  onClick={() => navigate("/projects")}
                  // src={iconForward}
                  style={{ ...navStyle, ...iconRight }}
                />
              </>
            )}
            <AboutMe />
          </>
        }
      />
      <Route
        path="/projects"
        element={
          <>
            {showNav && (
              <>
                <IconNavigation
                  direction="left"
                  name="home"
                  onClick={() => {
                    navigate("/home");
                    // onMouseLeave();
                  }}
                  // src={iconBack}
                  style={{ ...navStyle, ...iconLeft }}
                />
                {/* <Button
                  title="home"
                  destination="home"
                  style={{ ...navStyle, ...iconRight }}
                />

                <Button
                  title="about me"
                  destination="aboutme"
                  style={{ ...navStyle, ...iconRight }}
                /> */}
                <IconNavigation
                  direction="right"
                  name="about me"
                  onClick={() => navigate("/aboutme")}
                  // src={iconForward}
                  style={{ ...navStyle, ...iconRight }}
                />
              </>
            )}
            <Projects />
          </>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Error404 />} />
      {/* <Route path="/404" element={<Error404 />} /> */}
    </Routes>
  );
}

// <Route path="/*" element={<NotFound />} />
// <Route path="/" element={<Navigate to="/home" />} />
