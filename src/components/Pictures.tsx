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

const IMAGES = [
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_3528_px48ui.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_4669_bevlkg.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_3527_fwlr3t.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430315/IMG_3519_wya3sq.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430314/IMG_0212_er7rjp.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430314/IMG_4677_vtzjum.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430314/IMG_0215_rvopj6.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430313/IMG_0224_xauolo.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430309/IMG_0229_eeorvq.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430011/846F210C-4309-47A4-B244-44BFEEC56410_q2bwcs.jpg",
];

export function Pictures() {
  const images = [...IMAGES, ...IMAGES];

  return (
    <StyledPictures>
      <ScrollContainer>
        {images.map((src, i) => (
          <Picture key={i} src={src} alt={`Event photo ${(i % IMAGES.length) + 1}`} />
        ))}
      </ScrollContainer>
    </StyledPictures>
  );
}
