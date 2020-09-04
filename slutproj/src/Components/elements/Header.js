import React from "react";
import { Link } from "@reach/router";

import header from "../images/header.jpg";
import Logo from "../images/Logo.jpg";


import {
  StyledHeader,
  StyledLogo,
} from "../styles/StyledHeader";

const Header = () => (
  <div className="header-content">
    <Link to="/">
      <StyledLogo src={Logo} alt="logo" />
    </Link>

    <StyledHeader src={header} alt="header">
      
    </StyledHeader>
  </div>
);

export default Header;
