import styled from "styled-components";

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardHeader = styled.div`
  background-color: initial;
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  display: flex;
  padding: 0.75rem;
`;

export const CardContainer = styled.div`
  max-width: 100%;
  position: relative;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  @media screen and (max-width: 1088px) {
    margin: 0.5rem 0;
  }
`;