import Image, { StaticImageData } from 'next/image';

function CircleImage({
  src,
  alt,
  size = '5rem',
}: {
  src: string | StaticImageData;
  alt: string;
  size?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className="aspect-square rounded-full object-cover h-auto"
      style={{ width: size }}
    />
  );
}

export default CircleImage;
