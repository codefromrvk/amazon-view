import styled from "styled-components";

export const PriceHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  @media (max-width: 726px){
    flex-direction: column;
  }
`;
export const BottomContainer = styled.div`
display: flex;
    flex-direction: column;
`;
export const ProductContainer = styled.div`
  display: flex;
  @media (max-width: 726px){
    flex-direction: column;
  }
`;

export const ProductImg = styled.img`
    max-height: 300px;
    max-width: 300px;
    margin: auto;
`;
export const ProductHead = styled.span`
color:#737373;
font-weight: 450;
font-size: 20px;
line-height: 25px;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;

  h2 {
    color: black;
    font-weight: 450;
  }
  
`;

export const MRPContainer = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
  color: #808080;
  font-size: 15.5px;

  span {
    text-decoration: line-through;
  }
`;

export const PriceContainer = styled.div`
  margin-top: 0.3rem;
  padding-left: 2rem;
  color: #808080;
  label {
    font-size: 15.5px;
  }
  span {
    color: #bf4624;
    font-weight: 600;
  }
`;

export const SaveContainer = styled.div`
  color: #808080;
  margin-top: 1rem;

  font-size: 15.5px;

  span {
    color: #bf4624;

  }
  p {
    display: inline;
    padding-left: 0.3rem;
    font-size: 0.8rem;
    font-weight: 450;
    color: black;
    font-weight: 500;
  }
`;
export const AmazonViewBtn = styled.button`
  background: linear-gradient(180deg, #f8e5b5 0%, #efbf45 100%);
  border: 1px solid #9e8c3c;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0.3rem 1.7rem;
  cursor: pointer;
`;
export const BtnContainer = styled.div`
  margin-top: 1rem;
`;

export const AdContainer = styled.div`
  @media (max-width: 726px){
  margin: auto;
  
}

`;

export const AdImg = styled.img``;
