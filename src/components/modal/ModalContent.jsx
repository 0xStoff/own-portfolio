import React from "react";

import ModalText from "./ModalText";
import { ImageWrapper } from "./index.styles";

const ModalContent = ({ closeModal, data, load }) => {
  return (
    <>
      <ModalText closeModal={closeModal} data={data} />

      <ImageWrapper>
        {/* {load.loading ? null : (
          <CenterWrapper>
          <Loader width="400px" height="400px" borderWidth="10px" />
          </CenterWrapper>
        )} */}

        {data.vid && (
          <video style={{ width: "100%" }} controls autoPlay>
            <source src={data.vid} type="video/mp4" />
          </video>
        )}
        {data.imgs.map((img) => (
          <img style={{ width: "100%" }} key={img} src={img} />
        ))}
      </ImageWrapper>
    </>
  );
};

export default ModalContent;
