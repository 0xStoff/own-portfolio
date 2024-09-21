import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Define animations
const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

// Styled components
const Text = styled.h1`
  color: #fff;
  font-size: ${(props) => (props.isSecondText ? "4em" : "6em")};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isSecondText ? "2em" : "4em")};
  }
  &.blinking-cursor::after {
    content: '|';
    animation: ${blink} 1s step-end infinite;
    margin-left: 0.1em;
  }
`;

function Typewriter() {
  const firstText = "Christoph Mayer";
  const secondText = "Web Developer";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isTyping, setIsTyping] = useState(true); // Control cursor blinking

  // Helper function to handle typewriter effect
  const typeText = (text, setTextState, callback) => {
    const timeout = setTimeout(() => {
      setTextState((prevText) => {
        const nextText = text.slice(0, prevText.length + 1);
        if (nextText === text) {
          callback(); // Call the next phase (either stop typing or type the second text)
        }
        return nextText;
      });
    }, 150);
    return () => clearTimeout(timeout);
  };

  // Handle typing of the first text
  useEffect(() => {
    if (text1 !== firstText) {
      const cleanup = typeText(firstText, setText1, () => setIsTyping(false));
      return cleanup;
    }
  }, [text1]);

  // Handle typing of the second text after the first one is complete
  useEffect(() => {
    if (text1 === firstText && text2 !== secondText) {
      setIsTyping(true); // Show cursor during second text typing
      const cleanup = typeText(secondText, setText2, () => setIsTyping(false));
      return cleanup;
    }
  }, [text1, text2]);

  return (
      <>
        <Text className={isTyping && text1 !== firstText ? "blinking-cursor" : ""}>
          {text1}
        </Text>
        <Text
            isSecondText
            className={isTyping && text1 === firstText && text2 !== secondText ? "blinking-cursor" : ""}
        >
          {text2}
        </Text>
      </>
  );
}

export default Typewriter;