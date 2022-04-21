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

const url = "https://api.chucknorris.io/jokes/random";

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
    fetchData();
    // setTimeout(fetchData, 5000);
  }, []);

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
      <BottomContainer></BottomContainer>
    </PriceHistoryWrapper>
  );
}

export default PriceHistory;
