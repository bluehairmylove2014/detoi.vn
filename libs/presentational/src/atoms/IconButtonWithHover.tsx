const shapeStyle = {
  circle: 'rounded-full',
  square: 'rounded-md',
};

const backgroundStyle = {
  whiteYellow: 'bg-white hover:bg-yellow-500',
};

type iconButton = {
  type?: 'button' | 'submit' | 'reset';
  shape: 'circle' | 'square';
  background?: 'whiteYellow';
  onClick?: () => void;
  customSize?: string;
  children: React.ReactNode;
};

function IconButton({
  type,
  shape,
  onClick,
  customSize,
  background,
  children,
}: iconButton) {
  return (
    <button
      type={type}
      className={`${shapeStyle[shape]} w-8 h-8 relative overflow-hidden ${
        backgroundStyle[background || 'whiteYellow']
      }`}
      style={{ width: customSize, height: customSize }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
