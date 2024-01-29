import Image, { StaticImageData } from 'next/image';

function ImageIcon({
  src,
  alt,
  size = '5rem',
}: {
  src: string | StaticImageData;
  alt: string;
  size?: string;
}) {
  return <Image src={src} alt={alt} style={{ width: size, height: size }} />;
}

export default ImageIcon;
