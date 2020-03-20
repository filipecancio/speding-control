import styled from "styled-components";
import icon from "../../icons/icon-404.svg";

export const Content = styled.div`
  background-color: var(--color-third-300);
  width: 100%;
  height: 300px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 4px;
`;
export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--color-third-900);
  margin-top: 20px;
`;
export const Subtitle = styled.div`
  font-size: 0.925em;
  font-weight: normal;
  color: var(--color-third-700);
  margin: 5px auto;
`;
export const Information = styled.div`
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  line-height: 1.3em;
  color: var(--color-third-900);
  margin: 5px auto;
`;
export const Back = styled.div`
  font-size: 0.825em;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid var(--color-third-900);
  color: var(--color-third-900);
  margin: 10px auto;
`;
export const Icon = styled.div`
  background: url(${icon}) no-repeat center right;
  width: 90%;
  height: 300px;
`;
