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
        <Operation>001</Operation>
        <IconCard />
        <Account>0001945-3</Account>
      </DetailsAccount>
    </>
  );
}

export default AccountDetails;
