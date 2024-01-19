import Image, { StaticImageData } from 'next/image';

const DEFAULT_SIZE = '5rem';

function ImageIcon({
  src,
  alt,
  size,
}: {
  src: string | StaticImageData;
  alt: string;
  size?: string;
}) {
  const realSize = size ?? DEFAULT_SIZE;

  return (
    <Image src={src} alt={alt} style={{ width: realSize, height: realSize }} />
  );
}

export default ImageIcon;
