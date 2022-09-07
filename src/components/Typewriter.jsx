import React, { useEffect, useState } from "react";
import { Title } from "../styles/index.styles";

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
      <Title
        style={{ fontSize: "6em" }}
        className={text1 !== first_text && cursorClass}
      >
        {text1}
      </Title>
      <Title
        style={{ fontSize: "4em" }}
        className={text1 === first_text && text2 !== second_text && cursorClass}
      >
        {text2}
      </Title>
    </>
  );
}

export default Typewriter;
