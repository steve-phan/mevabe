 import Image from "next/image";

interface IAssets {
  url: string;
  sys: {
    id: string;
  };
  alt: string;
  description: string;
}

interface IRichTextAssetProps {
  id: string;
  assets?: IAssets[];
}

export const RichTextAsset = ({ id, assets }: IRichTextAssetProps) => {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return <Image src={asset.url} fill alt={asset.description} />;
  }

  return <></>;
};
