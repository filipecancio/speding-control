import styled from "styled-components";
import iconTransaction from "../../icons/icon-transaction.svg";
export const Content = styled.div`
  background-color: var(--color-third-300);
  width: 100%;
  height: 100%;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Type = styled.h1`
  font-weight: bold;
  font-size: 0.825em;
  color: var(--color-third-700);
  margin: 0 10px;
  text-transform: uppercase;
`;
export const TotalTransaction = styled.h1`
  font-weight: bold;
  font-size: 1.25em;
  color: var(--color-third-800);
  margin: 7px 40px;
`;
export const TotalEntry = styled.h1`
  font-weight: bold;
  font-size: 0.825em;
  color: var(--color-secondary-green-600);
  margin: -20px 230px;
`;
export const TotalOut = styled.h1`
  font-weight: bold;
  font-size: 0.825em;
  color: var(--color-secondary-blue-600);
  margin: -20px 230px;
`;
export const IconTransaction = styled.div`
  background: url(${iconTransaction}) no-repeat center right;
  width: 30px;
  height: 30px;
`;
