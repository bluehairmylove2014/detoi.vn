import Image, { StaticImageData } from 'next/image';

const DEFAULT_SIZE = '5rem';
function CircleImage({
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
    <Image
      src={src}
      alt={alt}
      className="aspect-square rounded-full object-cover h-auto"
      style={{ width: realSize }}
    />
  );
}

export default CircleImage;
