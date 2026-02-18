import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 32px;
  background-color: #1f2937;
  color: #9ca3af;
  font-size: 14px;
`;

export function Footer() {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} Megawalk. All rights reserved.
    </StyledFooter>
  );
}
