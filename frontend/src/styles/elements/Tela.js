import styled from "styled-components";

export const Tela = styled.div`
  background-color: ${props =>
    props.blancked ? "var(--color-third-300)" : "var(--color-primary-600)"};
  color: ${props => props.blancked && "var(--color-third-900)"};

  width: 320px;
  height: 568px;
  margin-top: 2.5vh;
  overflow: hidden;

  & > :nth-child(2) {
    height: 460px;
    margin: 19px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 700px) {
    margin-top: 0;
    width: 100%;
    height: 100vh;

    & > :nth-child(1),
    > :nth-child(3) {
      display: none;
    }

    & > :nth-child(2) {
      height: 90vh;
    }
  }
`;
