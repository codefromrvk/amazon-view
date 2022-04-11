import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  height: 50px;
  width: 100%;
  color: grey;
  box-shadow: rgb(0 0 0 / 5%) 0px 3px 8px;
`;

export const LeftContainer = styled.div`
  /* flex: 30%; */
`;

export const RightContainer = styled.div`
  /* flex: 70%; */
`;


export const NavBarInnerContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const NavBarExtendedContainer = styled.div`

`
export const HamburgerMenu = styled.div`
    display: inline;
    font-size: 43px;
    color: black;
    vertical-align: middle;

    @media (min-width: 1000px){
        display: none;
    }
`


export const NavBarLink = styled(Link)`
  font-size: 1.1rem;
  color: grey;
  text-decoration: none;
  margin-right: 3rem;

  @media (max-width: 1000px){
        display: none;
    }
`;
export const BrandLogo = styled.img`
    margin: 0.45rem 2rem;`;

export const SignUpButton = styled.button`
  padding: 0rem 1rem;
  height: 3rem;
  background: linear-gradient(111deg, rgb(255, 99, 42) 0%, rgb(226, 0, 0) 100%);
  border: none;
  border-radius: 1.5rem;
  font-family: Helvetica;
  color: rgb(255, 255, 255);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-right: 1rem;
`;
