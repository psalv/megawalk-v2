import styled from "styled-components";
import { colors } from "../theme";

const StyledSection = styled.section`
  padding: 80px 32px;
  max-width: 1200px;
  margin: 0 auto;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  background-color: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
  }
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-family: "Fugaz One", "Fugaz One", Impact, sans-serifve;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.textMain};
`;

const ITEMS = [
  { icon: "🚶", label: "Walk like 40km" },
  { icon: "🍷", label: "Drink sangria" },
  { icon: "🎉", label: "Have fun" },
  { icon: "🐕", label: "Help dogs" },
];

export function WhatItIs() {
  return (
    <StyledSection>
      <Title>WHAT IS THE MEGAWALK?</Title>
      <Grid>
        {ITEMS.map((item, i) => (
          <Item key={i}>
            <Icon>{item.icon}</Icon>
            <Label>{item.label}</Label>
          </Item>
        ))}
      </Grid>
    </StyledSection>
  );
}
