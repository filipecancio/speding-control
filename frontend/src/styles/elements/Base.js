import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-primary-600);
    color: var(--color-third-400);
  }
`;

export default Base;
