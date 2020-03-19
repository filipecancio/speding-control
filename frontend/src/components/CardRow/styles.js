import styled from "styled-components";

export const Content = styled.div`
  height: 100px;
  width: 100%;
  margin: auto;

  border-radius: 2px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & > div {
    margin: 5px;
  }

  display: flex;
`;
