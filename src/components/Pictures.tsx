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

function addCloudinaryWidth(url: string, width: number): string {
  return url.replace("/upload/", `/upload/w_${width}/`);
}

interface PicturesProps {
  images: string[];
  maxWidth?: number;
}

export function Pictures({ images, maxWidth = 600 }: PicturesProps) {
  const processedImages = images.map((url) => addCloudinaryWidth(url, maxWidth));
  const duplicatedImages = [...processedImages, ...processedImages];

  return (
    <StyledPictures>
      <ScrollContainer>
        {duplicatedImages.map((src, i) => (
          <Picture key={i} src={src} alt={`Event photo ${(i % images.length) + 1}`} />
        ))}
      </ScrollContainer>
    </StyledPictures>
  );
}
