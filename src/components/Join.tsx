import styled from "styled-components";
import { colors } from "../theme";

const StyledSection = styled.section`
  background-color: ${colors.surface};
  padding: 80px 32px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-family: "Fugaz One", "Fugaz One", Impact, sans-serifve;
  font-size: 48px;
  color: ${colors.textMain};
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${colors.textMuted};
  margin: 0 0 32px 0;
`;

const Button = styled.a`
  display: inline-block;
  font-family: "Fugaz One", "Fugaz One", Impact, sans-serifve;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.bg};
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(31, 111, 255, 0.4);
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid ${colors.border};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 1;
  }
`;

export function Join() {
  return (
    <StyledSection>
      <Container>
        <Content>
          <Title>BECOME A MEGAWALKER</Title>
          <Description>
            Ready to walk a long distance at a leisurely pace? All are welcome.
          </Description>
          <Button
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE YOUR DREAMS
          </Button>
        </Content>
        <ImageWrapper>
          <Image
            src="https://placehold.co/400x400/7A2CFF/EAF2FF?text=Join+Us"
            alt="Join Megawalk"
          />
        </ImageWrapper>
      </Container>
    </StyledSection>
  );
}
