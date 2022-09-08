import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FirstText = styled.h1`
  color: #fff;
  font-size: 6em;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;

const SecondText = styled.h1`
  color: #fff;
  font-size: 4em;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

function Typewriter() {
  const first_text = "Christoph Mayer";
  const second_text = "Web Developer";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const cursorClass = "blinking-cursor";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 150);
    return () => clearTimeout(timeout);
  }, [text1]);

  useEffect(() => {
    if (text1 === first_text) {
      const timeout = setTimeout(() => {
        setText2(second_text.slice(0, text2.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [text1, text2]);

  return (
    <>
      <FirstText className={text1 !== first_text && cursorClass}>
        {text1}
      </FirstText>
      <SecondText
        className={text1 === first_text && text2 !== second_text && cursorClass}
      >
        {text2}
      </SecondText>
    </>
  );
}

export default Typewriter;
