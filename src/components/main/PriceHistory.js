import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Loader } from "../../styles/Chart.styles";
import product from "../../assets/product.png";
import ad from "../../assets/ad.png";
import {
  PriceHistoryWrapper,
  TopContainer,
  BottomContainer,
  ProductContainer,
  AdContainer,
  ProductImg,
  ProductHead,
  AdImg,
  ProductDetails,
  AmazonViewBtn,
  BtnContainer,
  MRPContainer,
  SaveContainer,
  PriceContainer,
} from "../../styles/PriceHistory.styles";
import ChartMain from "./chart/ChartMain";
import { ChartError } from "../../styles/Error.styles";

/**
 * Main component that displays Product , advertisement and Chart
 *
 * Component Tree
 * PriceHistoryWrapper
 * ----TopContainer
 *          ----ProductContainer
 *          ----AdContainer
 * ----BottomContainer
 *          ----ChartTitle
 *          ----ChartContainer
 *                  ----BarChart (Average Chart)
 *                  ----AreaChart (Price Chart)
 *          ----ChartLegend
 */

const url =
  "https://pricegraph.fairpe.com/?url=https://www.flipkart.com/roadster-solid-men-polo-neck-dark-blue-t-shirt/p/itmc7ad331d857a4?pid=TSHFKG2UWAT9KTCE%26lid=LSTTSHFKG2UWAT9KTCE95XYZ6%26marketplace=FLIPKART%26store=clo%2Fash%26srno=b_1_1%26otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_1_4.dealCard.OMU_GAMQD2CWQA9T_3%26otracker1=hp_omu_SECTIONED_manualRanking_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_1_NA_view-all_3%26fm=neo%2Fmerchandising%26iid=en_DyH6AeMS27c8AurtqjaZUGiWOXiQFgV9OOdfprN8GKseDCdy6VM6D3oQ3mHjYrfLkyA8PifvSW1%2BirfqAZUNwA%3D%3D%26ppt=browse%26ppn=browse%26ssid=2979k1pq3nn1kao01649158174029";

const url2 = "";

function PriceHistory() {
  const [chartData, setChartData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isProductError, setIsProductError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      console.log("here");

      try {
        const result = await axios.get(url);
        console.log(result.data);
        setChartData(result.data);

      } catch (error) {
        setIsError(true);
      }


      setIsLoading(false);
    }
    // fetchData();
    setTimeout(fetchData, 5000);
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsProductError(false);
  //     setIsProductLoading(true);

  //     try {
  //       const result = await axios.get(url2)

  //       console.log("res",result)
  //       setProductData(result.data.value);
  //     } catch (error) {
  //       console.log(error)
  //       console.log(isProductError)
  //       setIsProductError(true);
  //     }
  //     setIsProductLoading(false);
  //   }
  //   fetchData();
  // }, []);
  return (
    <PriceHistoryWrapper>
      <TopContainer>
        <ProductContainer>
          <ProductImg src={product} alt="product" />
          <ProductDetails>
            <ProductHead>Amazon price History{productId}</ProductHead>
            <h2>Apple iPhone 12 (128GB) - Blue</h2>
            <ReactStars
              size={30}
              value={3.5}
              activeColor={"#FFA41C"}
              edit={false}
              isHalf={true}
            />
            {/* <p style={{maxWidth:"300px"}}>{productData}</p> */}
            <MRPContainer>
              <label>M.R.P</label> : <span>&#x20B9;1234</span>
            </MRPContainer>
            <PriceContainer>
              <label>Price</label> : <span>&#x20B9;765</span>
            </PriceContainer>
            <SaveContainer>
              <label>You save</label> : <span>&#x20B9;500 (30%)</span>
              <p>Inclusive of all taxes</p>
            </SaveContainer>
            <BtnContainer>
              <AmazonViewBtn>View at Amazon</AmazonViewBtn>
            </BtnContainer>
          </ProductDetails>
        </ProductContainer>
        <AdContainer>
          <AdImg src={ad} alt="advertisement" />
        </AdContainer>
      </TopContainer>
      <BottomContainer>
        {/* <ChartTitle>
          <div><h1>PRICE GRAPH</h1></div> 
          <Selector></Selector>
        </ChartTitle>
        {isError ? (
          <h2 style={{ color: "black" }}>Something went wrong ...</h2>
        ) : isLoading ? (
          <div style={{ color: "black" }}>Loading ...</div>
        ) : (
          <>
            <ChartContainer>
              <AverageChart data={formatDate(chartData)}></AverageChart>
              <PriceChart data={formatDate(chartData)}></PriceChart>
            </ChartContainer>
            <LegendBox>
              <MaxBox></MaxBox>
              <span>Maximum Price</span>
              <MinBox></MinBox>
              <span> Minimum Price</span>
            </LegendBox>
          </>
        )} */}
        {/* {true ? (
          <h2 style={{ color: "black" }}>Something went wrong ...</h2>
       <ChartError><span> Oops!!! Something went wrong ...</span><p>Be patient while fix the error</p></ChartError>

        ) :
         isLoading ? (
          <Loader>
            <ThreeDots color="black" height="100" width="100" />
            <span>Loading Data</span>
          </Loader>
        ) : ( */}
          <ChartMain chartData={chartData} isLoading={isLoading} isError={isError}/>
        {/* )
        } */}
      </BottomContainer>
    </PriceHistoryWrapper>
  );
}

export default PriceHistory;
