import React from "react";
import * as Styled from "./index.styles";
import { Title, Text, Subtitle, List } from "../../styles/index.styles";
import icon from "../../img/others/download.svg";

import Close from "./Close";
import IconNavigation from "../Icon";

const ModalText = ({ closeModal, data }) => {
  // console.log(data);
  return (
    <Styled.ModalTextWrapper>
      <Styled.IconWrapper>
        <div style={{ display: "flex" }}>
          {data.pdf ? (
            data.pdf.map((d) => (
              <IconNavigation
                tooltip="Dokumente herunterladen"
                href={d}
                target="_blank"
                src={icon}
                key={d}
              />
            ))
          ) : (
            <div />
          )}
        </div>
        <Close onClick={closeModal} />
      </Styled.IconWrapper>
      <Title style={{ marginTop: 80 }}>{data.title}</Title>
      <br />
      <Text>{data.description}</Text>
      <br />
      {data.link && (
        <>
          <a style={{ color: "white" }} href={data.link} target="_">
            {data.link}
          </a>
          <br />
          <br />
        </>
      )}
      {data.competence && data.competence.map((c) => <List key={c}>{c}</List>)}
    </Styled.ModalTextWrapper>
  );
};

export default ModalText;
