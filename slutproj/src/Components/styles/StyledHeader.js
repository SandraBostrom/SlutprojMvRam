import styled from "styled-components";

export const StyledHeader = styled.img`
background-size: 100%;
  background-position: center;
  width: 100%;
  height: 600px;
  position: relative;
}`;

export const StyledLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
