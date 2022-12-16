import Image, { ImageProps } from "next/image";

const contentfulLoader = ({ src, width }: Partial<IContentfulImageProps>) => {
  return `${src}?w=${width}&q=75`;
};

interface IContentfulImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ContentfulImage = (props: ImageProps) => {
  return <Image loader={contentfulLoader} {...props} alt={props.alt} />;
};
