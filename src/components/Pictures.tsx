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

const StyledPictures = styled.section`
  background-color: ${colors.surface};
  padding: 48px 0;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;
  gap: 16px;
`;

const Picture = styled.img`
  height: 280px;
  width: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const PLACEHOLDER_IMAGES = [
  "https://placehold.co/400x280/1F6FFF/EAF2FF?text=Dog+1",
  "https://placehold.co/350x280/7A2CFF/EAF2FF?text=Walk+2",
  "https://placehold.co/450x280/FF2ED1/EAF2FF?text=Event+3",
  "https://placehold.co/380x280/19FFA3/0B0F19?text=Dogs+4",
  "https://placehold.co/420x280/00E5FF/0B0F19?text=Fun+5",
  "https://placehold.co/360x280/FF7A00/0B0F19?text=Walk+6",
];

export function Pictures() {
  const images = [...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES];

  return (
    <StyledPictures>
      <ScrollContainer>
        {images.map((src, i) => (
          <Picture key={i} src={src} alt={`Event photo ${(i % PLACEHOLDER_IMAGES.length) + 1}`} />
        ))}
      </ScrollContainer>
    </StyledPictures>
  );
}
