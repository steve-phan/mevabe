import { IAuthor } from "../@types";
import { ContentfulImage } from "./ContentfulImage";

export const Avatar = ({ name, image }: Partial<IAuthor>) => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          src={image?.url}
          fill
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};
