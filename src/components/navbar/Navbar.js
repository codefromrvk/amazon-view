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
  NavBarExtendedLink,NavBarLinkDemo,NavBarExtendedLinkDemo
} from "../../styles/Navbar.styles";
import logo from "../../assets/logo.png";

function NavBar() {
  const [extendedNavBar, setExtendedNavBar] = useState(true);

  return (
    <NavBarContainer>
      <NavBarInnerContainer>
        {/* Navbar for desktop view */}

        <LeftContainer>
          <BrandLogo src={logo} alt="logo" />
        </LeftContainer>
        <RightContainer>

          <NavBarLinkDemo to="/">Why Fairpe</NavBarLinkDemo>
          <NavBarLinkDemo to="/">Register Shop</NavBarLinkDemo>
          <NavBarLink to="pricehistory">Price History</NavBarLink>
          <NavBarLinkDemo to="">Careers</NavBarLinkDemo>
          <NavBarLinkDemo to="">Contact Us</NavBarLinkDemo>
          <NavBarLinkDemo to="">
            <SignUpButton>Sign Up</SignUpButton>{" "}
          </NavBarLinkDemo>

          <HamburgerMenu onClick={() => setExtendedNavBar(!extendedNavBar)}>
            &#8801;
          </HamburgerMenu>
        </RightContainer>
      </NavBarInnerContainer>
      {extendedNavBar&&<NavBarExtendedContainer>
        {/* Navbar for Mobile / Tab view */}

        <NavBarExtendedLinkDemo to="">Why Fairpe</NavBarExtendedLinkDemo>
        <NavBarExtendedLinkDemo to="">Register Shop</NavBarExtendedLinkDemo>
        <NavBarExtendedLink to="/pricehistory/123">
          Price History
        </NavBarExtendedLink>
        <NavBarExtendedLinkDemo to="">Careers</NavBarExtendedLinkDemo>
        <NavBarExtendedLinkDemo to="">Contact Us</NavBarExtendedLinkDemo>
        <NavBarExtendedLinkDemo to="">
          <SignUpButton>Sign Up</SignUpButton>{" "}
        </NavBarExtendedLinkDemo>
      </NavBarExtendedContainer>}
    </NavBarContainer>
  );
}

export default NavBar;
