import styled, { keyframes } from "styled-components";
import { colors } from "../theme";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const StyledHeader = styled.header`
  background-color: ${colors.surface};
  border-bottom: 1px solid ${colors.border};
  padding: 16px 0;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;
`;

const BrandText = styled.span`
  font-family: "Fugaz One", cursive;
  font-size: 32px;
  color: ${colors.textMain};
  white-space: nowrap;
  padding: 0 24px;

  &::after {
    content: "✦";
    padding-left: 24px;
    color: ${colors.accent};
  }
`;

export function Header() {
  const items = Array(20).fill("MEGAWALK");

  return (
    <StyledHeader>
      <ScrollContainer>
        {items.map((text, i) => (
          <BrandText key={i}>{text}</BrandText>
        ))}
      </ScrollContainer>
    </StyledHeader>
  );
}
