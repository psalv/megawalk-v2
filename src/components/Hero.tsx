import styled from "styled-components";

const StyledHero = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 32px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 16px 0;
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 32px 0;
  max-width: 600px;
  opacity: 0.9;
`;

const Button = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #764ba2;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export function Hero() {
  return (
    <StyledHero>
      <Title>Megawalk 2025</Title>
      <Subtitle>
        Join us for an unforgettable walking event. Connect with the community,
        explore new paths, and challenge yourself.
      </Subtitle>
      <Button>Register Now</Button>
    </StyledHero>
  );
}
