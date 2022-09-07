import React from "react";

import { Image, TextWrapper } from "./index.styles";
import { Text, Title } from "../../styles/index.styles";

const padding = { padding: "5px 30px" };

const CardContent = ({ data }) => (
  <>
    <Image src={data.imgs[0]} />
    <TextWrapper>
      <Title style={padding}>{data.title}</Title>
      <Text style={padding}>
        {data.description.length > 400
          ? data.description.substring(0, 400) + "..."
          : data.description}
      </Text>
    </TextWrapper>
  </>
);
export default CardContent;
