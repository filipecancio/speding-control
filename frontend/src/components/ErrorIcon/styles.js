import styled from "styled-components";
import icon from "../../icons/icon-404.svg";

export const Content = styled.div`
  background-color: var(--color-third-300);
  width: 100%;
  height: 200px;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  background: url(${icon}) no-repeat center right;
  width: 90%;
  height: 300px;
`;
