import styled from "styled-components";
import icon from "../../icons/icon-alimentacao.svg";
import iconClose from "../../icons/icon-close.svg";
export const Content = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  border-bottom: 1px solid var(--color-third-600);
  display: flex;
  align-items: center;
  justify-content: space-around;

  & div {
    display: flex;
    flex-direction: column;
    width: 140px;

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

export const IconClose = styled.span`
  background: url(${iconClose}) no-repeat center right;
  width: 15.45px;
  height: 23.17px;
`;
export const Icon = styled.span`
  background: url(${icon}) no-repeat center right;
  width: 15.45px;
  height: 23.17px;
`;
