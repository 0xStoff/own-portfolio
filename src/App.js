import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { default as Card } from "./components/card/Cards";
import { default as Modal } from "./components/modal/Modal";
import MouseContextProvider, { MouseContext } from "./context/mouseContext";
import DotRing from "./routes/DotRing";

import Layout from "./routes/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [modalVisible, setModalVisible] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);
  const [details, setDetails] = useState(0);

  const handleClick = (details) => {
    setDetails(details.id);
    setModalVisible(true);
    setCardClicked(true);
  };

  const onSuccess = () => {
    // console.log("Yay! Swipe Success");
  };

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
