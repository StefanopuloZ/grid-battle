import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderList } from "./styledHeader";
import { StyledContainer } from "../StyledContainer";

const Header = props => {
  return (
    <HeaderWrapper>
      <StyledContainer>
        <nav>
          <HeaderList>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/battle">
              <li>Battle</li>
            </Link>
            <Link to="/help">
              <li>About</li>
            </Link>
          </HeaderList>
        </nav>
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;
