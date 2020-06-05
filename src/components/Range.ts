import styled from "styled-components";

export const Range = styled.input.attrs({
  type: "range",
})`
  body {
    margin: 20px;
  }
  input[type="range"] {
    -webkit-appearance: none;
    -moz-apperance: none;
    width: 200px;
    height: 8px;
    padding: 0;
    border-left: 20px solid blue;
    border-right: 20px solid red;
    background: #024069;
    border-radius: 2px;
    margin-top: 25px;
    /* background-image: linear-gradient(
      linear,
      left top,
      right top,
      color-stop(0.2, blue),
      color-stop(0.2, red)
    ); */
    outline: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-apperance: none;
    width: 25px;
    height: 25px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    border-radius: 20px;
    /* background-image: linear-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, #fefefe),
      color-stop(0.49, #d7d7d7),
      color-stop(0.51, #d1d1d1),
      color-stop(1, #c8c8c8)
    ); */
    border: 1px solid #787878;
  }
`;
