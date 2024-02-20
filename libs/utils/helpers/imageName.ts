import { v4 } from 'uuid';

export function generateUniqueImageName(): string {
  const uniqueId: string = v4();
  const imageName: string = `image_${uniqueId}`;

  return imageName;
}

export function renameImageWithUniqueName(img: File): File {
  const newName = generateUniqueImageName() + '.' + img.type.split('/')[1];
  return new File([img], newName, { type: img.type });
}
