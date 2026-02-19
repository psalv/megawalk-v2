import styled from "styled-components";

const StyledSection = styled.section`
  padding: 0 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

function addCloudinaryWidth(url: string, width: number): string {
  return url.replace("/upload/", `/upload/w_${width}/`);
}

interface FeatureImageProps {
  src: string;
  width?: number;
  alt?: string;
}

export function FeatureImage({ src, width = 2000, alt = "Feature image" }: FeatureImageProps) {
  return (
    <StyledSection>
      <Image src={addCloudinaryWidth(src, width)} alt={alt} />
    </StyledSection>
  );
}
