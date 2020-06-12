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

    h1, h2, h3, h4, h5, p {
        margin: 0;
        padding: 0;
    }

    section {
        padding: 3rem 1.5rem;
    }

    .card-margin-top {
        margin-top: 0.5rem;
    }

    .gray {
        color: gray;
    }

    .title {
        font-weight: 700
    }

    .flex {
        flex: 1;
    }
`;

export default Theme;
