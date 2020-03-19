import styled from "styled-components";
import icon from "../../icons/icon-notificacao.svg";

export const Content = styled.div`
  width: 96px;
  height: 15px;
  display: flex;
  align-items: left;
  align-self: flex-start;
  margin: 20px;

  & h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    color: #4b4b4b;
    margin: 5px;
  }
`;
export const Icon = styled.div`
  background: url(${icon}) no-repeat center right;
  width: 12px;
  height: 15px;
`;
export const ButtonSalve = styled.div`
  font-size: 1em;
  margin: 10px auto;
  padding: 10px 0px;
  text-align: center;
  border-top: 1px solid var(--color-third-600);
  width: 100%;
  text-transform: uppercase;
  color: var(--color-third-800);
`;
