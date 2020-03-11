import styled from "styled-components";

export const Content = styled.div`
  color: ${props =>
    props.active
      ? "var(--color-third-400)"
      : "var(--color-secondary-orange-600)"};
  background-color: ${props =>
    props.active
      ? "var(--color-secondary-orange-600)"
      : "var(--color-primary-800)"};
  width: 103px;
  height: 103px;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div``;
