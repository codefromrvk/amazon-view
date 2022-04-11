import React from "react";
import {PriceHistoryWrapper,TopContainer,BottomContainer,ProductContainer,AdContainer} from '../../styles/PriceHistory.styles'

function PriceHistory() {
  return (
    <PriceHistoryWrapper>
      <TopContainer>
        <ProductContainer>Product</ProductContainer>
        <AdContainer>Ad</AdContainer>
      </TopContainer>
      <BottomContainer>Chart</BottomContainer>
    </PriceHistoryWrapper>
  );
}

export default PriceHistory;
