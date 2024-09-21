import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import styled, {keyframes} from "styled-components";
import Typewriter from "../components/Typewriter";
import github from "../img/icons/github.svg";
import notion from "../img/icons/notion.svg";
import IconNavigation from "../components/Icon";


export const Text = styled.h1`
  color: #fff;
  font-size: ${(props) => (props.isSecondText ? "4em" : "6em")};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: ${(props) => (props.isSecondText ? "2em" : "4em")};
  }
`;

// Wrapper for the whole component with fadeIn animation
const Wrapper = styled.div`
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  padding-left: 150px;

  @media (max-width: 768px) {
    padding-left: 15px;
  }
  width: fit-content;
`;

// Slide-in animation for buttons
const slideIn = keyframes`
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0%);
  }
`;

// Styled component to apply the slide animation
const Slide = styled.div`
  transform: translateX(-200%);
  animation: ${slideIn} 3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation-delay: 3s;
`;

function Home({...cursorProps}) {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setShowTypewriter(true); // Set showTypewriter to true when the window loads
        };
    }, []);

    const Navigation = () => <>
        <div style={{display: "flex", marginTop: '150px'}}>
            <IconNavigation
                src={github}
                style={{padding: 10}}
                target="_blank"
                href="https://github.com/0xStoff"
            />
            <IconNavigation
                href="https://0xstoff.notion.site/Hey-das-bin-ich-de-Christoph-0f7858ec70f745778bff487e749ab083"
                target="_blank"
                src={notion}
            />
        </div>

        <Button destination="projects" title="Projects." setShowTypewriter={setShowTypewriter}/>
        <Button destination="aboutme" title="About Me." setShowTypewriter={setShowTypewriter}/></>

    return (<Wrapper>
        {showTypewriter ? <Typewriter/> : <>
            <Text>Christoph Mayer</Text>
            <Text>Web Developer</Text>
        </>}
        {showTypewriter ? <Slide><Navigation/></Slide> : <Navigation/>}
    </Wrapper>);
}

export default Home;