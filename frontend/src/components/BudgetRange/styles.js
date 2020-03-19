import styled from "styled-components";

export const Content = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #4b4b4b;
  margin: -15px 0px;
`;
export const ValuesBalance = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Values = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 0.825em;
  color: var(--color-third-700);
  margin: 15px 10px;
`;
export const RangeBase = styled.div`
  width: 200px;
  height: 3px;
  border-radius: 2px;
  background-color: var(--color-third-600);
  margin: 0px auto;
`;
export const RangeColored = styled.div`
  width: 80px;
  height: 3px;
  border-radius: 2px;
  background-color: var(--color-secondary-green-600);
  margin: -3px 32px;
`;
export const BallRange = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: var(--color-primary-700);
  box-shadow: 0.5px 0.5px 0.5px 0.5px var(--color-third-800);
  margin: -10px 100px;
`;
export const ValueSelected = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  color: var(--color-third-900);
  margin: 15px 75px;
`;
