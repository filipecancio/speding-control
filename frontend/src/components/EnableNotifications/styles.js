import styled from "styled-components";
import icon from "../../icons/icon-notificacao.svg";

export const Content = styled.div`
  width: 96px;
  height: 15px;

  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 23px;

  & h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    color: #4b4b4b;
    margin: 7px;
  }
`;
export const Icon = styled.div`
  background: url(${icon}) no-repeat center right;
  width: 12px;
  height: 15px;
`;
