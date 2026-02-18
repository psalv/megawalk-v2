import styled from "styled-components";
import { colors } from "../theme";

const StyledHero = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_4658_ajtq6c.jpg");
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(11, 15, 25, 0.4) 0%,
      rgba(11, 15, 25, 0.8) 100%
    );
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 32px;
`;

const Title = styled.h1`
  font-family: "Fugaz One", "Fugaz One", Impact, sans-serifve;
  font-size: clamp(48px, 10vw, 96px);
  color: ${colors.textMain};
  margin: 0 0 16px 0;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.p`
  font-size: clamp(18px, 3vw, 28px);
  font-weight: 500;
  color: ${colors.textMuted};
  margin: 0;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Subsubtitle = styled.p`
  font-size: clamp(12px, 2vw, 16px);
  font-weight: 500;
  color: ${colors.textMuted};
  margin: 0;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export function Hero() {
  return (
    <StyledHero>
      <Content>
        <Subsubtitle>MEGAWALK 2026</Subsubtitle>
        <Title>WALKING THE DOGS</Title>
        <Subtitle>July 4, Comox BC</Subtitle>
      </Content>
    </StyledHero>
  );
}
