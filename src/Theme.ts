import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
    body {
        font-family: Roboto,sans-serif;
        letter-spacing: 1px;
        box-sizing: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }

    .gray {
        color: gray;
    }

    .title {
        font-weight: 700
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
        padding: 0;
    }
`;

export default Theme;
