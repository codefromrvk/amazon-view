import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  color: grey;
  box-shadow: rgb(0 0 0 / 5%) 0px 3px 8px;
`;

export const LeftContainer = styled.div`

`;

export const RightContainer = styled.div`

`;


export const NavBarInnerContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;

`

export const NavBarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 1000px) {
  display: none;
}
`
export const HamburgerMenu = styled.div`
    display: inline;
    font-size: 43px;
    color: black;
    vertical-align: middle;
    padding-right: 1rem;

    @media (min-width: 1000px){
        display: none;
    }
`


export const NavBarLink = styled(NavLink)`
  font-size: 1.1rem;
  color: grey;
  text-decoration: none;
  margin-right: 3rem;
  padding: 0.5rem 0;
  
  
  @media (max-width: 1000px){
        display: none;
    }
    &.active {
    border-bottom: 2px solid #E11307;
  }
`;

export const NavBarLinkDemo = styled(NavBarLink)`
  pointer-events: none;

`
export const NavBarExtendedLink = styled(NavLink)`
  font-size: 1.1rem;
  color: grey;
  text-decoration: none;
  margin-right: 3rem;
  padding: 0.5rem 0;

  @media (min-width: 1000px){
        display: none;
    }
    &.active {
    border-bottom: 2px solid #E11307;
  }
`;

export const NavBarExtendedLinkDemo = styled(NavBarExtendedLink)`
  pointer-events: none;

`

export const BrandLogo = styled.img`
    margin: 0.45rem 5rem;`;

export const SignUpButton = styled.button`
     padding: 0.5rem 1.5rem;
    background: linear-gradient(111deg,rgb(255,99,42) 0%,rgb(226,0,0) 100%);
    border: none;
    border-radius: 1.5rem;
    font-family: Helvetica;
    color: rgb(255,255,255);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    margin-right: 1rem;
`;
