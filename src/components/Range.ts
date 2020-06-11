import styled from "styled-components";

export const Range = styled.progress.attrs({
  max: 100,
})<{ value: number }>`
  -webkit-appearance: none;
  -moz-apperance: none;
  height: 1rem;
  padding: 0;
  border: solid 1px #66c7f4;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  width: 100%;


  &::-webkit-progress-bar {
    background: #E8E8E8;
  }
  &::-webkit-progress-value {
    background: #66c7f4;
  }
  &::-moz-progress-bar {
    background: #66c7f4;
  }
`;
