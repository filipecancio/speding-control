import React from "react";
import {
  DetailsAccount,
  IconArrow,
  IconPayment,
  Operation,
  IconCard,
  Account
} from "./styles";

function AccountDetails(props) {
  return (
    <>
      <DetailsAccount>
        <IconArrow />
        <IconPayment />
        <Operation>{props.agencia}</Operation>
        <IconCard />
        <Account>{props.conta}</Account>
      </DetailsAccount>
    </>
  );
}

export default AccountDetails;
