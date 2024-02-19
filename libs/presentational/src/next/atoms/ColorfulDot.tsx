type colorType = 'red' | 'yellow' | 'blue';

function getTailwindColorCls(color: colorType) {
  switch (color) {
    case 'red':
      return 'bg-rose';
    case 'yellow':
      return 'bg-yellow';
    case 'blue':
      return 'bg-blue';
    default:
      return '';
  }
}

function ColorfulDot({
  size = '0.25rem',
  color,
}: {
  size?: string;
  color: colorType;
}) {
  return (
    <div
      className={`rounded-full aspect-square h-auto relative ${getTailwindColorCls(
        color
      )}`}
      style={{ width: size }}
    ></div>
  );
}

export default ColorfulDot;
