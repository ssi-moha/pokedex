import React from "react";
import { CardHeader, CardContent, CardContainer } from "./style";

interface Props {
  title?: string;
  containerClassName?: string; 
}

const Card: React.FC<Props> = ({ title, children, containerClassName }) => {
  return (
    <CardContainer className={containerClassName}>
      {title && (
        <CardHeader>
          <p className="title">{title}</p>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default Card;
