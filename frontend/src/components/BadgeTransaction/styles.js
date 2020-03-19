import styled from "styled-components";
import icon from "../../icons/icon-alimentacao.svg";
import iconClose from "../../icons/icon-close.svg";
export const Content = styled.h1`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid var(--color-third-600);
  display: flex;
  align-items: center;
  justify-content: space-around;

  & div {
    display: flex;
    flex-direction: column;

    & h1 {
      font-weight: 600;
      font-size: 12px;
      color: #3f3d3c;
    }

    & h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 123.05%;
      color: #000000;
    }

    & h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 123.05%;
      color: #000000;
    }
  }
  & p {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 123.05%;
    color: #cccccc;
  }
`;

export const IconClose = styled.div`
  background: url(${iconClose}) no-repeat center right;
  width: 15.45px;
  height: 23.17px;
`;
export const Icon = styled.div`
  background: url(${icon}) no-repeat center right;
  width: 15.45px;
  height: 23.17px;
`;
