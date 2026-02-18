import styled from "styled-components";
import { colors } from "../theme";

const StyledSection = styled.section`
  padding: 80px 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 480px;
  height: 480px;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid ${colors.border};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    height: auto;
    aspect-ratio: 1;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-family: "Fugaz One", cursive;
  font-size: 36px;
  color: ${colors.textMain};
  margin: 0 0 24px 0;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${colors.textMuted};
  margin: 0 0 24px 0;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.info};
  }

  &::after {
    content: "→";
  }
`;

export function RuffRiders() {
  return (
    <StyledSection>
      <Container>
        <ImageWrapper>
          <Image
            src="https://placehold.co/320x320/1F6FFF/EAF2FF?text=Ruff+Riders"
            alt="Ruff Riders Animal Transport"
          />
        </ImageWrapper>
        <Content>
          <Title>Walking for dogs?</Title>
          <Description>
            Do you love the dogs? We do.
            <br />
            <br />
            That's why we've partnered with Ruff Riders Animal Transport to give every dog the best chance at a forever home.
            <br />
            <br />
            Ruff Riders is a 100% not for profit rescue animal network and transport
            entity. The supply and demand for rescue dogs are not in the same
            location—their goal is to responsibly move as many dogs as
            possible to reputable adoption focused rescues in areas with high
            adoption rates. 
            <br/>
            <br/>
            Ruff Riders is responsible for 1395 happy endings and counting.
          </Description>
          <Link
            href="https://ruffridersanimaltransport.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Ruff Riders
          </Link>
        </Content>
      </Container>
    </StyledSection>
  );
}
