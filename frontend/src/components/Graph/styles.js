import styled from "styled-components";
import test from "../../icons/icon-grafico-01.svg";

export const Content = styled.div`
  background-color: var(--color-third-400);
  width: 100%;
  height: 100%;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  background: url(${test}) no-repeat center right;
  width: 90%;
  height: 300px;
`;
