import styled, { keyframes } from "styled-components";

const Card = styled.div`
  background-color: #121212;
  border-radius: 10px;
  outline: 1px solid rgba(185, 185, 185, 0.3);
  display: flex;
  height: 450px;
  // margin-bottom: 50px;
  overflow: hidden;
  width: 800px;

  &:hover {
    background-color: rgba(185, 185, 185, 0.05);

    mix-blend-mode: lighten;
    transition: opacity 0.5s ease-in-out;
    // outline: 1px solid rgba(255, 255, 255, 0.3);
  }

  &:active {
    background-color: rgba(31, 27, 36, 1);

    mix-blend-mode: screen;
    transition: opacity 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

const Image = styled.img`
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  height: 100%;
  object-fit: cover;
  width: 50%;

  @media (max-width: 768px) {
    max-height: 450px;
    object-position: top;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 10px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
    padding-top: 10px;
    width: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

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

  align-items: center;
  // background-color: #121212;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 3em;
`;

const pulsedark = keyframes` {
  0% {
    transform: scale(0.99);
    box-shadow: 0 0 0 0rgba(255, 255, 255, 0.05);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
  }

  100% {
    transform: scale(0.99);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.05);
  }`;

const CenterWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  align-self: center;
  width: 50%;

  @media (max-width: 768px) {
    margin-top: 20px;
    height: 400px;
  }
`;

const Skeleton = styled.div.attrs(({ type }) => ({
  type: type || "div",
}))`
  ${(props) => ({ ...props })};
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  animation: ${pulsedark} 2s infinite;
`;

export { Card, CenterWrapper, Image, Skeleton, TextWrapper, Wrapper };
