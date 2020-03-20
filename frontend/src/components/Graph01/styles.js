import styled from "styled-components";
import icon from "../../icons/icon-grafico-02.svg";

export const Content = styled.div`
  background-color: #fff;
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
  width: 120%;
  height: 200px;
  margin: 0 40px;
`;
