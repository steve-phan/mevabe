import Image, { ImageProps } from "next/image";

export const contentfulLoader = ({ src, width }) => {
  return `${src}?w=${width}&q=75`;
};

export const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} alt={props.alt} />;
};
