import { useRef } from "react";

import useOutsideAlerter from "../../hooks/useOutsideAlert";
import * as Styled from "./index.styles";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
     overflow: ${(props) => (!props.hideOverflow ? "unset" : "hidden")};

  }
`;
export default function ModalComponent({
  closeModal,
  children,
  data,
  isClicked,
  modalVisible,
  load,
  ...otherProps
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeModal);
  return (
    <Styled.Wrapper>
      <GlobalStyle hideOverflow={modalVisible} />
      {modalVisible && <Styled.Overlay />}
      <Styled.Modal
        isClicked={isClicked}
        modalVisible={modalVisible}
        ref={wrapperRef}
        {...otherProps}
      >
        {children({ closeModal, data, load })}
      </Styled.Modal>
    </Styled.Wrapper>
  );
}
