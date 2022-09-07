import React from "react";

import { Loader } from "../../styles/index.styles";
import { CenterWrapper, Skeleton, TextWrapper } from "./index.styles";

const CardSkeleton = () => (
  <>
    <CenterWrapper>
      <Loader width="100px" height="100px" />
    </CenterWrapper>
    <TextWrapper>
      <Skeleton
        borderRadius="25px"
        height="50px"
        margin="50px 0 30px 0"
        width="80%"
      ></Skeleton>
      <Skeleton
        borderRadius="20px"
        height="220px"
        margin="25px 0"
        width="80%"
      />
    </TextWrapper>
  </>
);

export default CardSkeleton;
