import styled from "styled-components";
import iconArrowDown from "../../icons/icon-arrowdown.svg";
import iconLogoNubank from "../../icons/icon-logo.svg";

export const Header = styled.div`
  background-color: none;
  width: 100%;
  height: 60px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const LogoNubank = styled.div`
  background: url(${iconLogoNubank}) no-repeat center left;
  width: 40px;
  height: 50px;
  margin: auto 10px;
`;
export const NameAccount = styled.div`
  color: var(--color-third-300);
  text-align: center;
  font-weight: regular;
  font-size: 1em;
  margin: auto 0px;
`;
export const ArrowDown = styled.div`
  background: url(${iconArrowDown}) no-repeat center left;
  background-color: none;
  width: 14px;
  height: 19px;
  margin: 0px auto;
`;
