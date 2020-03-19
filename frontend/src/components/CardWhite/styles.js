import styled from "styled-components";
import icon from "../../icons/icon-money.svg";
import iconArrowRight from "../../icons/icon-sdireita.svg";
import iconPayment from "../../icons/icon-pagamento.svg";
import iconNoSee from "../../icons/icon-naomostrar.svg";
import iconArrowDown from "../../icons/icon-arrowdown.svg";
import iconLogoNubank from "../../icons/icon-logo.svg";

export const Content = styled.div`
  color: var(--color-secondary-orange-600);
  background-color: var(--color-third-300);

  width: 100%;
  height: 304px;
  border-radius: 2px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  width: 50%;
  height: 60px;
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: nowrap;
`;
export const LogoNubank = styled.div`
  background: url(${iconLogoNubank}) no-repeat center left;
  width: 40px;
  height: 35px;
  margin: 10px 20px;
`;
export const DataName = styled.div`
  color: var(--color-third-300);
  margin: 10px 50px;
  font-weight: bold;
  font-size: 0.825em;
  line-height: 1.2em;
`;
export const ArrowDown = styled.div`
  background: url(${iconArrowDown}) no-repeat center left;
  width: 45px;
  height: 19px;
  margin: 40px 10px;
`;
export const Header = styled.div`
  width: 100%;
  height: 50px;
  margin: 15px 10px 70px 15px;
  display: flex;
  justify-content: space-between;
`;
export const Account = styled.div`
  color: var(--color-third-500);
  margin: 8px 30px;
  text-align: left
  font-weight: regular;
  font-size: 0.720em;
  line-height: 1.2em;
`;
export const IconPayment = styled.div`
  background: url(${iconPayment}) no-repeat center left;
  width: 45px;
  height: 25px;
`;
export const IconNoSee= styled.div`
  background: url(${iconNoSee}) no-repeat center left;
  width: 45px;
  height: 25px;
  margin: 0px 10px;
  
`;
export const Middle = styled.div`
  width: 300px;
  height: 300px;
`;
export const Balance = styled.div`
  font-size: 0.825em;
  text-alig: left;
  margin: 10px 20px;
  font-weight: normal;
  color: var(--color-third-600);
`;
export const Value = styled.div`
  font-size: 1.25em;
  text-alig: left;
  margin: 10px 20px;
  font-weight: bold;
  color: var(--color-third-900);
`;
export const Bottom = styled.div`
  height: 107px;
  max-width: auto;
	margin: 0 auto;
	display: flex;
  background: var(--color-third-400);
  border-radius: 0px 0px 2px 2px;
`;
export const Paragraph = styled.div`
  color: var(--color-third-900);
  margin: 25px 0px;
  text-align- left;
  font-weight: regular;
  font-size: 0.720em;
  line-height: 1.2em;
`;
export const Icon = styled.div`
  background: url(${icon}) no-repeat center left;
  margin: 30px 16px;
  width: 45px;
  height: 19px;
`;
export const ArrowRight = styled.div`
  background: url(${iconArrowRight}) no-repeat center left;
  margin: 30px 16px;
  width: 45px;
  height: 19px;
`;