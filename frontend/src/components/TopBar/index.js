import React from "react";
import { Content, Hour, Alarm, WiFi, Network, Battery} from "./styles";

function TopBar(props) {
  return (
    <>
      <Content>
        <Hour>18:40</Hour>
        <Alarm />
        <WiFi />
        <Network />
        <Battery />
      </Content>
    </>
  );
}

export default TopBar;
