import React from "react";

import ModalText from "./ModalText";
import { CenterWrapper, ImageWrapper } from "./index.styles";
import { Loader } from "../../styles/index.styles";

import schemaThumb from "../../img/greifautomat/schema_thumb.gif";
import Icon from "../../routes/Icon";

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
          <video controls>
            <source src={data.vid} type="video/mp4" />
          </video>
        )}
        {data.imgs.map((img) => (
          <img key={img} src={img} />
        ))}
      </ImageWrapper>
    </>
  );
};

export default ModalContent;
