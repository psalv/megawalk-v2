import styled from "styled-components";
import { colors } from "../theme";

const StyledSection = styled.section`
  padding: 80px 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Title = styled.h2`
  font-family: "Fugaz One", "Fugaz One", Impact, sans-serifve;
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
    gap: 16px;
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
  overflow: hidden;
  transition: border-color 0.2s ease;

  @media (max-width: 768px) {
    padding: 16px;
    aspect-ratio: 2 / 1;
  }

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
  font-family: "Fugaz One", "Fugaz One", Impact, sans-serifve;
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

const SPONSORS = [
  {
    name: "Tenor",
    logo: "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430972/tenor_logo_wvgx51.png",
  },
  {
    name: "Monkey Tree",
    logo: "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430966/monkeytree_obpjfi.png",
  },
  {
    name: "Tacofino",
    logo: "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771431017/tacofino-removebg-preview_dwrpkq.png",
  },
  {
    name: "Tealwood",
    logo: "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771431017/tealwood-removebg-preview_g1mqio.png",
  },
];

export function Sponsors() {
  return (
    <StyledSection>
      <Title>MEGASPONSORS</Title>
      <Grid>
        {SPONSORS.map((sponsor, i) => (
          <SponsorCard key={i}>
            <SponsorLogo src={sponsor.logo} alt={sponsor.name} />
          </SponsorCard>
        ))}
      </Grid>
      <CTAWrapper>
        <CTALink
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/WDsdfukLdn4LQihw9"
        >
          BECOME A MEGASPONSOR
        </CTALink>
      </CTAWrapper>
    </StyledSection>
  );
}
