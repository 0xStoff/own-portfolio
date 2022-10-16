import React from "react";
import MouseContextProvider from "./context/mouseContext";
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
