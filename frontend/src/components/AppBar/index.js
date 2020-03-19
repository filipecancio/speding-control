import React from "react";
import { Content, Triangle, Circle, Square } from "./styles";

function AppBar(props) {
  return (
    <>
      <Content>
        <Triangle />
        <Circle />
        <Square />
        <Ball></Ball>
      </Content>
    </>
  );
}

export default AppBar;
