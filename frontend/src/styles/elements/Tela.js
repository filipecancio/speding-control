import styled from "styled-components";

export const Tela = styled.div`
  background-color: ${props =>
    props.blancked ? "var(--color-third-300)" : "var(--color-primary-600)"};
  color: ${props => props.blancked && "var(--color-third-900)"};

  width: 360px;
  height: 90vh;
  min-height: 600px;

  padding: 19px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
