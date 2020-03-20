import styled from "styled-components";
import iconArrowLeft from "../../icons/icon-arrow-left.svg";
import iconCreditCard from "../../icons/icon-credit-card.svg";
import iconAccountPayment from "../../icons/icon-account-payment.svg";

export const DetailsAccount = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 1px 1px var(--color-third-400);
`;
export const IconArrow = styled.div`
  align-self: flex-start;
  background: url(${iconArrowLeft}) no-repeat center right;
  width: 16px;
  height: 25px;
  margin: 20px 0px;
`;
export const IconPayment = styled.div`
  align-self: flex-start;
  background: url(${iconAccountPayment}) no-repeat center right;
  width: 30px;
  height: 30px;
  margin: 18px 0px;
`;
export const Operation = styled.div`
  font-size: 0.825em;
  font-weight: bold;
  color: var(--color-third-700);
  text-align: center;
  padding: 5px;
  width: 50px;
  height: 10px;
  border-radius: 3px;
  margin: 20px 0px;
  background: var(--color-third-400);
`;
export const IconCard = styled.div`
  align-self: flex-start;
  background: url(${iconCreditCard}) no-repeat center right;
  width: 30px;
  height: 30px;
  margin: 15px 0px;
`;
export const Account = styled.div`
  font-size: 0.825em;
  font-weight: bold;
  color: var(--color-third-700);
  text-align: center;
  padding: 5px;
  width: 70px;
  height: 10px;
  border-radius: 3px;
  margin: 20px 0px;
  background: var(--color-third-400);
`;
