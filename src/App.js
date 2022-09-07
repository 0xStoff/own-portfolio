import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { default as Card } from "./components/card/Cards";
import { default as Modal } from "./components/modal/Modal";
import MouseContextProvider, { MouseContext } from "./context/mouseContext";
import DotRing from "./components/DotRing";

import Layout from "./routes/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MouseContextProvider>
        <DotRing />
        <Layout />
      </MouseContextProvider>
    </BrowserRouter>
  );
}

export default App;
