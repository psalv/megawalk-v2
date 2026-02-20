import styled, { keyframes } from "styled-components";
import { colors } from "../theme";

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const StyledPictures = styled.section`
  background-color: ${colors.surface};
  padding: 48px 0;
  overflow: hidden;
`;

const ScrollContainer = styled.div<{ $duration: number }>`
  display: flex;
  width: max-content;
  animation: ${scroll} ${(props) => props.$duration}s linear infinite;
`;

const Picture = styled.img`
  height: 280px;
  width: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;
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
  // 1.62 seconds per image
  const duration = images.length * 1.62;

  return (
    <StyledPictures>
      <ScrollContainer $duration={duration}>
        {duplicatedImages.map((src, i) => (
          <Picture key={i} src={src} alt={`Event photo ${(i % images.length) + 1}`} />
        ))}
      </ScrollContainer>
    </StyledPictures>
  );
}
