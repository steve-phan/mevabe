import { ContentfulImage } from "./ContentfulImage";

interface IAvatarProps {
  name: string;
  image: {
    url: string;
  };
}

export const Avatar = ({ name, image }: IAvatarProps) => {
  return (
    <div className="flex items-center  ml-2">
      <div className="relative w-10 h-10 mr-2">
        <ContentfulImage
          src={image.url}
          fill
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-lg font-bold">{name}</div>
    </div>
  );
};
