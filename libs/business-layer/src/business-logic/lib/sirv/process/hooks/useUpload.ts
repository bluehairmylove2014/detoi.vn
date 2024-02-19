// Importing necessary modules and functions
import { uploadReturnType } from '@business-layer/services';
import { useUploadMutation } from '../../fetching/mutation';

export const useUpload = () => {
  const uploadMutation = useUploadMutation();

  const readFileAsBuffer = (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        resolve(event.target?.result);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const onUpload = ({
    imgFile,
    path,
  }: {
    imgFile: File;
    path: string;
  }): Promise<uploadReturnType> => {
    return new Promise((resolve, reject) => {
      // Convert file to buffer
      readFileAsBuffer(imgFile).then((buffer: any) => {
        uploadMutation
          .mutateAsync({
            file: imgFile,
            fileBuffer: buffer,
            path: `${path}/${imgFile.name}`,
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };

  return {
    onUpload,
    isLoading: uploadMutation.isPending,
  };
};
