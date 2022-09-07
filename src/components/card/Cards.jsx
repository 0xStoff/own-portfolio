import React from "react";

import CardComponent from "./Card";
import * as Styled from "./index.styles";

const Cards = ({ onClick, data: cards }) => (
  <>
    {cards.map((data, index) => (
      <Styled.Wrapper key={index}>
        <CardComponent data={data} index={index} onClick={onClick} />
      </Styled.Wrapper>
    ))}
  </>
);

export default Cards;
