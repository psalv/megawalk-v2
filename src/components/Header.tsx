import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #2563eb;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s ease;

  &:hover {
    color: #2563eb;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Logo>Megawalk</Logo>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#schedule">Schedule</NavLink>
        <NavLink href="#register">Register</NavLink>
      </Nav>
    </StyledHeader>
  );
}
