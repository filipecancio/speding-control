import styled from "styled-components";
import iconAlarm from "../../icons/icon-alarm.svg";
import iconWifi from "../../icons/icon-wifi.svg";
import iconNetwork from "../../icons/icon-network.svg";
import iconBattery from "../../icons/icon-battery.svg";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4f1760;
  height: 30px;
  width: 100%;
`;
export const Hour = styled.div`
  font-size: 1.2em;
  color: var(--color-third-300);
  font-weight: regular;
  margin: 5px 15px;
`;
export const Alarm = styled.div`
  background: url(${iconAlarm}) no-repeat center right;
  width: 45px;
  height: 25px;
  margin: 0px 0px 0px 145px;
`;
export const WiFi = styled.div`
  background: url(${iconWifi}) no-repeat center right;
  width: 45px;
  height: 25px;
`;
export const Network = styled.div`
  background: url(${iconNetwork}) no-repeat center right;
  width: 45px;
  height: 25px;
`;
export const Battery = styled.div`
  background: url(${iconBattery}) no-repeat center right;
  width: 45px;
  height: 25px;
`;
