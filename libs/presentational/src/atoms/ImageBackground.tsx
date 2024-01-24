type backgroundImage = {
  children: React.ReactNode | string | number;
};

function ImageBackground({ children }: backgroundImage): JSX.Element {
  return <div className="">{children}</div>;
}

export default ImageBackground;
