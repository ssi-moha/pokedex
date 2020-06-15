import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {}

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #4ed9f9;
  display: flex;
  min-height: 3.25rem;
  z-index: 10;
  padding: 0 1.5rem;
`;

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
`;

const Navbar: React.FC<Props> = () => {
  return (
    <NavbarContainer>
      <NavbarItem>
        <Link to="/">Pokédex</Link>
      </NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
