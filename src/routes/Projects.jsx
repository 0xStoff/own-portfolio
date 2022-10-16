import React, { useState } from "react";

import { default as Card } from "../components/card/Cards";
import { default as Modal } from "../components/modal/Modal";
import ModalContent from "../components/modal/ModalContent";

import styled from "styled-components";

import greifer from "../img/greifautomat/greifautomat.jpg";
import elektronik from "../img/greifautomat/elektronik.png";
import schema from "../img/greifautomat/schema_thumb.gif";
// import schema from "../img/greifautomat/schema.png";
import doku from "../img/greifautomat/idpa_doku.png";
import komponentenBaum from "../img/innovation/komponenten-baum.png";
import mockup from "../img/innovation/MOCKUP.png";
import dokuInnovation from "../img/innovation/IPA_Dokumentation_final.pdf";
import phpVid from "../img/phpIct/phpvid.mp4";
import vorschau from "../img/phpIct/vorschau.png";
import vidly0 from "../img/courses/vidly0.png";
import vidly1 from "../img/courses/vidly1.png";
import vidly2 from "../img/courses/vidly2.png";
import native from "../img/courses/native.png";

import ecdl from "../img/ecdl.jpg";
import ochsen from "../img/ochsen.png";

import broschuere from "../img/design/broschuere.pdf";
import cicd from "../img/design/cicd.pdf";
import plakat from "../img/design/plakat.png";

import dokuGreifer from "../img/greifautomat/IDPA_Dokumentation.pdf";

const Wrapper = styled.div`
  margin-top: 150px;
`;

function Projects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cardClicked, setCardClicked] = useState(false);
  const [details, setDetails] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = (details) => {
    setDetails(details.id);
    setModalVisible(true);
    setCardClicked(true);
  };

  return (
    <Wrapper>
      <Card data={projectsData} onClick={handleClick} />
      <Modal
        children={ModalContent}
        load={{ loading, setLoading }}
        id="modal"
        closeModal={() => {
          setModalVisible(false);
          setTimeout(() => {
            document.getElementById("modal").scrollTop = 0;
          }, 100);
        }}
        data={projectsData[details]}
        isClicked={cardClicked}
        onAnimationEnd={() => !modalVisible && setCardClicked(false)}
        modalVisible={modalVisible}
      />
    </Wrapper>
  );
}

export default Projects;

const projectsData = [
  {
    id: 0,
    title: "Greifautomat",
    description:
      "Als Elektroniker hatte ich das erste Mal ins Programmieren geschnuppert (C++ und C#). Natürlich hatten wir aber noch eine Reihe weiterer Kompetenzen in dieser Ausbildung erarbeitet. Für das Projekt des Greifautomatenspiels war dies ganz nützlich. ",
    competence: [
      "Konzeption und Aufbau von Testschaltungen",
      "Schema zeichnen",
      "Bauteildimensionierung",
      "Programmierung mittels Arduino IDE (C++)",
      "Ansteuerung von Stepper-Motoren mit hoher Leistung (CNC-Shield)",
      "Ansteuerung von LCD-Display",
      "Verarbeiten von analogen und digitalen Signale",
      "I2C Kommunikation",
      "Layout auf Veroboard",
      "Fertigung der Hardware",
      "Verdrahtung",
      "Fehlerbehebung und Testmessungen",
    ],
    pdf: [dokuGreifer],
    imgs: [greifer, doku, elektronik, schema],
  },
  {
    id: 1,
    title: "Innovation Flow App",
    link: "http://innovation.stoeff.xyz",
    description: `Individuelle Praktische Arbeit für Brüggli Medien: Innovation Flow ist eine Feedback-Pinnwand für die Mitarbeiter von Brüggli Medien. Mitarbeiter können über diese Pinnwand Feedback zur Firma, Strategien, Prozessen, Kantine etc. abgeben. 
     Die App ist auf meinem persönlichen Server gehosted und kann darum angesehen werden. Dazu nutzt man entweder den Testuser (test@advery.ch; abc123), oder man legt einfach einen neuen User an (auch mit Fake-Mail möglich, keine Bestätigung notwendig).`,

    // url: komponentenBaum,
    competence: [
      "React",
      "GraphQL mit Apollo",
      "MUI CSS Framework",
      "Strapi mit GraphQL",
      "Konzept der Webseite",
      "Screendesign in Adobe xD",
      "Übersicht der Feedbacks",
      "Hinzufügen, Bearbeiten und Löschen von Feedbacks",
      "Hosting",
      "Login-Interface",
      "Liken und Kommentieren von Feedbacks",
    ],
    pdf: [dokuInnovation],
    imgs: [mockup, komponentenBaum],
  },
  {
    id: 2,
    title: "PHP Projekt",
    description:
      "Kleines App, dass Github Projekte in einem Portfolio anzeigt. Vorgabe war, eine einfache REST-API mittels PHP aufzubauen. Frontend sollte ausserdem in VanillaJS umgesetzt sein. Daneben wurde pures CSS für die UI verwendet.",
    // url: img3,
    competence: [
      "VanillaJS",
      "CSS (ohne Framework)",
      "REST-API mit PHP",
      "MariaDB",
    ],
    pdf: [
      "https://www.notion.so/0xstoff/ICT-Projekt-Dokumentation-0aba74f3e7bf48c4b4047b579753622a",
    ],
    imgs: [vorschau],
    vid: phpVid,
  },
  {
    id: 3,
    title: "Ochsen Beringen",
    description:
      "Als kleines Nebenprojekt habe ich die Website des Restaurant Ochsen Beringen erstellt und Pflege diese auch regelmässig. Dies ermöglichte es mir, erste Erfahrungen auf einer Serverumgebung, oder aber mit SEO zu sammeln. Das Projekt wurde natürlich wieder mit React umgesetzt.",
    link: "https://ochsen-beringen.ch/",
    competence: [
      "React",
      "Strapi",
      "Frontend und Backend auf verschiedenen Servern",
      "Umgang mit FTP",
      "SEO und Google Console",
      "Umgang mit Google API",
      "API erstellen und lesen",
      "DNS und Domain konfiguration",
      "Nginx Proxying",
      "SSL konfiguration",
      "Design",
    ],
    // pdf: ecdl,
    imgs: [ochsen],
  },
  {
    id: 4,
    title: "Design",
    description:
      "Design war neben Web ein Thema, von dem ich in der Ausbildung als Mediamatiker ziemlich profitieren konnte. So habe ich, obwohl ich sonst eher der Programmierer bin, mir in diesem Bereich doch noch einige Kompetenzen erarbeiten können.",
    // url: login,
    // competence: ["Konzeption und Aufbau von Testschaltungen"],
    pdf: [broschuere, cicd],
    imgs: [plakat],
  },
  {
    id: 5,
    title: "Office",
    description:
      "Als Elektroniker hatte ich mich nicht nur mit Hard- und Software befasst, sondern auch sehr viel mit den Office Paketen. Ich habe eine Word Schulung durchgeführt, in der ich alle Lehrlinge über einen Tag lang instruierte. Für diese Schulung hatte ich mich im Vorfeld monatelang mit Word befasst und das Ganze auf über 50 Seiten dokumentiert. Als ich dann die Ausbildung zum Mediamatiker begann, ergab sich die Möglichkeit, dass ECDL abzulegen. Durch mein Vorwissen konnte ich dies ohne Probleme auf Experten-Level abschliessen.",
    // competence: ["Konzeption und Aufbau von Testschaltungen"],
    // pdf: ecdl,
    imgs: [ecdl],
  },
  {
    id: 6,
    title: "Kurse",
    description:
      "Als ich Javascript und React für mich entdeckt hatte, habe ich mich viel durch Youtube, Online-Artikel und Kurse weitergebildet. Ich habe dadurch alle Grundlagen rundum React und Javascript gelernt. Natürlich bilde ich mich auch stets weiter, so habe ich kürzlich meine erste React Native App umgesetzt. Ausserdem habe ich schon ins Backend mit NodeJs oder in ganz andere Themen wie Python geschnuppert. Es steht noch einiges auf meiner To-Do List.",
    // url: mockup,
    competence: ["React", "Bootstrap CSS", "Strapi", "React Native"],
    imgs: [vidly0, vidly1, vidly2, native],
  },
];
