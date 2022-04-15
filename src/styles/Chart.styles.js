import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export const ChartContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
`;

export const ChartTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 62%;
  margin: auto;
  div {
    width: 100%;
    text-align: center;
  }
  h1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.05em;
  }
`;

export const LegendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;

  span {
    margin-left: 1rem;
  }
`;

export const MaxBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: #a9daf2;
`;

export const MinBox = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 1rem;
  background-color: #f86112;
`;

export const Loader = styled.div`

display: flex;
flex-direction: column;
align-items: center;
span{
  font-weight: 600;
}

`