import React, { useState } from "react";
import {
  LeftContainer,
  RightContainer,
  NavBarContainer,
  NavBarLink,
  BrandLogo,
  SignUpButton,
  NavBarInnerContainer,
  NavBarExtendedContainer,
  HamburgerMenu,
} from "../../styles/Navbar.styles";
import logo from "../../assets/logo.png";

function NavBar() {
  const [extendedNavBar, setExtendedNavBar] = useState(true);

  return (
    <NavBarContainer>
      <NavBarInnerContainer>
        <LeftContainer>
          <BrandLogo src={logo} alt="logo" />
        </LeftContainer>
        <RightContainer>
          <NavBarLink to="/">Why Fairpe</NavBarLink>
          <NavBarLink to="/register">Register Shop</NavBarLink>
          <NavBarLink to="/pricehistory/amazon">Price History</NavBarLink>
          <NavBarLink to="/careers">Careers</NavBarLink>
          <NavBarLink to="/contact">Contact Us</NavBarLink>
          <NavBarLink to="/">
            <SignUpButton>Sign Up</SignUpButton>{" "}
          </NavBarLink>

          <HamburgerMenu onClick={() => setExtendedNavBar(!extendedNavBar)}>
            &#8801;
          </HamburgerMenu>
        </RightContainer>
      </NavBarInnerContainer>
      <NavBarExtendedContainer></NavBarExtendedContainer>
    </NavBarContainer>
  );
}

export default NavBar;
