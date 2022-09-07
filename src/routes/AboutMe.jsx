import React, { useEffect, useState } from "react";
import styled from "styled-components";
import me from "../img/others/me.png";
import ecdl from "../img/others/ECDL_Expert.png";
import efz from "../img/others/efz_Page_1.png";
import bms from "../img/others/bms_Page_1.png";
import { Text, Title } from "../styles/index.styles";

const Image = styled.img`
  animation: fadeIn 0.5s ease-in-out forwards;
  // height: auto;
  object-fit: cover;
  width: 50%;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    // max-height: 450px;
    object-position: top;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  // height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TextWrapper = styled.div`
  // width: 50%;
`;

const padding = { padding: "10px 50px" };

const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <About />
        <Image src={me} />
      </Wrapper>
    </>
  );
};

const About = () => (
  <div>
    <Title style={{ ...padding, marginTop: "150px" }}>
      Hey, das bin ich, de Christoph.
    </Title>
    <Text style={padding}>
      Ich bin glernte Mediamatiker und ha e liebi fürs Web, insbesondere JS und
      React. Ich han i de letste Jahr einiges an Erfahrig dörfe sammle, nit
      zulest well ich scho mol e Usbildig als Elektroniker gmacht gha ha. Ich
      finde mich in Konzept vo de Softwareentwicklig bis hin zur Hardware dihei.
      Uf dere Siite chönder e paar Idrück vo mir und mine Arbeite sammle
      (inklusive da portfolio ish selbstgmacht; reines react.js und css ohni
      frameworks); lueged defür doch au no de Notion-Link uf de Startsiite ah.
    </Text>
    <Text style={padding}>
      Sush gits nid viel über mich zsege. Bin 26gi, mag technik, tue gern
      longboaarde und liebs natürlich ziit mit gliichgsiinte zverbringe...
    </Text>
  </div>
);
export default AboutMe;
