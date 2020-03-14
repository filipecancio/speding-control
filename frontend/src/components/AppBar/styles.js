import styled from "styled-components";
import triangle from "../../icons/icon-triangle.svg";
import circle from "../../icons/icon-circle.svg";
import square from "../../icons/icon-square.svg";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #4f1760;
  height: 40px;
  width: 100%;
`;
export const Triangle = styled.div`
  background: url(${triangle}) no-repeat center right;
  width: 15px;
  height: 15px;
`;
export const Circle = styled.div`
  background: url(${circle}) no-repeat center right;
  width: 15px;
  height: 15px;
`;
export const Square = styled.div`
  background: url(${square}) no-repeat center right;
  width: 15px;
  height: 15px;
`;
