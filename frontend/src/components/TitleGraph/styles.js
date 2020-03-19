import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    font-weight: normal;
    font-size: 14px;
    color: #6c6c6c;
    margin: 20px 0px 0px 0px;
  }
  & h2 {
    font-weight: bold;
    font-size: 12px;
    margin: 5px;
    color: #c4c4c4;
    margin: 10px 0px;
  }
  & h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 0.625em;
    color: #6c6c6c;
  }
`;
