import React from "react";


import AverageChart from "./AverageChart";
import PriceChart from "./PriceChart";
import {
  ChartContainer,
  ChartTitle,
  LegendBox,
  MinBox,
  MaxBox,
} from "../../../styles/Chart.styles";
import Selector from "./Selector";
import {formatDate} from '../../../utils/dateformatter'
import { ThreeDots } from "react-loader-spinner";

import { Loader } from "../../../styles/Chart.styles";
import { ChartError } from "../../../styles/Error.styles";


function ChartMain({chartData,isLoading,isError}) {
  return (
    isLoading ? (
        <Loader>
          <ThreeDots color="black" height="100" width="100" />
          <span>Loading Data</span>
        </Loader>
      ) : (
    <div>
      <ChartTitle>
        <div>
          <h1>PRICE GRAPH</h1>
        </div>
        <Selector></Selector>
      </ChartTitle>

      {isError?
       <ChartError><span> Oops!!! Something went wrong ...</span><p>Be patient while fix the error</p></ChartError>
      
      :
          <><ChartContainer>
        <AverageChart data={formatDate(chartData)}></AverageChart>
        <PriceChart data={formatDate(chartData)}></PriceChart>
      </ChartContainer>
      <LegendBox>
        <MaxBox></MaxBox>
        <span>Maximum Price</span>
        <MinBox></MinBox>
        <span> Minimum Price</span>
      </LegendBox></>}
    </div>)
  );
}

export default ChartMain;
