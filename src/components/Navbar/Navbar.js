import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import Container from '../Container/Container';

const StyledNav = styled.nav`
  width: 100%;
  background: var(--navBg);
  padding: 10px 0;
  margin: 0 0 30px;
`

const StyledNavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledNavItemsLinks = styled.ul`
  text-decoration: none;
  margin: 0;

  a {
    font-family: 'Exo 2', sans-serif;
    text-transform: uppercase;
    margin: 0 10px;
    text-decoration: none;
    color: var(--navLinkColor);
  }
`

const NavbarComponent = () => {
  return (
   <StyledNav>
     <Container>
       <StyledNavItems>
         <StyledNavItemsLinks>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
         </StyledNavItemsLinks>
       </StyledNavItems>
     </Container>
   </StyledNav>
)}

export default NavbarComponent;