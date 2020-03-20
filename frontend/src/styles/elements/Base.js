import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.825em;
    font-weight: bold;
    align-text: left;
    background-color: var(--color-third-900);
    color: var(--color-third-400);

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    width:100%;
  }
`;

export default Base;
