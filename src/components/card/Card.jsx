import React from "react";

import CardSkeleton from "./CardSkeleton";
import CardContent from "./CardContent";
import { withMouse } from "../../hoc/withMouse";

import { Card } from "./index.styles";

const CardComponent = ({ props: { data, onClick }, loading = false }) => (
  <Card onClick={() => onClick(data)}>
    {loading ? <CardSkeleton /> : <CardContent data={data} />}
  </Card>
);
export default withMouse(CardComponent);
