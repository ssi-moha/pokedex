import React from "react";
import { CardHeader, CardContent, CardContainer } from "./style";

interface Props {
  title: string;
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <CardContainer>
      <CardHeader>
        <p className="title">{title}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default Card;
