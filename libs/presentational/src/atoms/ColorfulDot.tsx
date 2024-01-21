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

const DEFAULT_SIZE = '0.25rem';
function ColorfulDot({ size, color }: { size?: string; color: colorType }) {
  const realSize = size ?? DEFAULT_SIZE;
  return (
    <div
      className={`rounded-full aspect-square h-auto relative ${getTailwindColorCls(
        color
      )}`}
      style={{ width: realSize }}
    ></div>
  );
}

export default ColorfulDot;
