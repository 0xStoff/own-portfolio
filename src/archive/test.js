import React from "react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: red;
`;

const test = () => {
  const [color, setColor] = useState(0);

  useEffect(() => {}, []);

  return <Wrapper>Hello World</Wrapper>;
};

export default test;
