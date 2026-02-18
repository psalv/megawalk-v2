import styled from "styled-components";
import { colors } from "../theme";

const StyledSection = styled.section`
  padding: 80px 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Fugaz One", cursive;
  font-size: 36px;
  color: ${colors.textMain};
  text-align: center;
  margin: 0 0 48px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SponsorCard = styled.div`
  background-color: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
  }
`;

const SponsorLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CTAWrapper = styled.div`
  text-align: center;
`;

const CTALink = styled.a`
  font-family: "Fugaz One", cursive;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.accent};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.info};
  }

  &::after {
    content: "→";
  }
`;

const PLACEHOLDER_SPONSORS = [
  { name: "Sponsor 1", logo: "https://placehold.co/200x100/1E2A45/9FB3D9?text=Sponsor+1" },
  { name: "Sponsor 2", logo: "https://placehold.co/200x100/1E2A45/9FB3D9?text=Sponsor+2" },
  { name: "Sponsor 3", logo: "https://placehold.co/200x100/1E2A45/9FB3D9?text=Sponsor+3" },
  { name: "Sponsor 4", logo: "https://placehold.co/200x100/1E2A45/9FB3D9?text=Sponsor+4" },
  { name: "Sponsor 5", logo: "https://placehold.co/200x100/1E2A45/9FB3D9?text=Sponsor+5" },
  { name: "Sponsor 6", logo: "https://placehold.co/200x100/1E2A45/9FB3D9?text=Sponsor+6" },
];

export function Sponsors() {
  return (
    <StyledSection>
      <Title>MEGASPONSORS</Title>
      <Grid>
        {PLACEHOLDER_SPONSORS.map((sponsor, i) => (
          <SponsorCard key={i}>
            <SponsorLogo src={sponsor.logo} alt={sponsor.name} />
          </SponsorCard>
        ))}
      </Grid>
      <CTAWrapper>
        <CTALink href="mailto:sponsor@megawalk.com">
          BECOME A MEGASPONSOR
        </CTALink>
      </CTAWrapper>
    </StyledSection>
  );
}
