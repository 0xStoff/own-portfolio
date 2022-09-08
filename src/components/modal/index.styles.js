import styled, { keyframes } from "styled-components";

const modalIn = keyframes`
  0% {
    transform: scale(0);    
    visibility: hidden;
    opacity:0;
  }
  100% {
    transform: scale(1);    
    visibility: visible;
    opacity:1;
  }
`;

const modalOut = keyframes`
    0% {
      transform: scale(1);    
      visibility: visible;
      opacity: 1;
    }
    100% {
      transform: scale(0);    visibility: hidden;
      opacity: 0;
    }
`;

const slideDown = keyframes`
0% {
    transform: translateY(0%);

  }
  100% {
    transform: translateY(120%);
  }
`;

const slideUp = keyframes`
0% {
    transform: translateY(100%);

  }
  100% {
    transform: translateY(0%);  

  }
`;

const CenterWrapper = styled.div`
  // align-items: center;
  align-self: center;
  display: flex;
  // height: 100%;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
  }
`;

const CloseIcon = styled.img`
  // position: absolute;
  // right: 70px;
  // padding-top: 50px;
  width: 30px;
`;

const ImageWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // max-width: 100%;
  margin-top: 70px;
`;

const Modal = styled.div`
  display: ${(props) => !props.isClicked && "none"};
  background-color: #121212;
  border-radius: 10px;
  width: 70%;
  height: 80%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: scroll;
  position: fixed;
  top: 70px;
  z-index: 100;

  animation: ${(props) => (props.modalVisible ? modalIn : modalOut)} 0.5s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @media (max-width: 768px) {
    animation: ${(props) => (props.modalVisible ? slideUp : slideDown)} 0.5s
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

const ModalTextWrapper = styled.div`
  padding: 1em 5em;
  @media (max-width: 768px) {
    padding: 1em 3em;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 50px;
`;

const Overlay = styled.div`
   {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 3em;
`;

export {
  CenterWrapper,
  CloseIcon,
  ModalTextWrapper,
  Modal,
  Overlay,
  ImageWrapper,
  IconWrapper,
  Wrapper,
};
