import styled from "styled-components";
import iconSpending from "../../icons/icon-spending.svg";
import iconLock from "../../icons/icon-lock.svg";

export const Content = styled.div`
  color: ${props =>
    props.active
      ? "var(--color-third-400)"
      : "var(--color-third-300)"};
  background-color: ${props =>
    props.active
      ? "var(--color-secondary-orange-600)"
      : "var(--color-primary-800)"};

      font-size: 0.825em;
      font-weight: bold;
      line-height: 1.2em;
      padding: 5px 5px;
      width: 100px;
      height: 103px;
      border-radius: 2px;
      display: flex;
      flex-direction: column;
`;
export const IconLock = styled.div`
  background: url(${iconLock}) no-repeat center left;
  width: 40px;
  height: 35px;
  margin: 0px 5px 25px;
`;