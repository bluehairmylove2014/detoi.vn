import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type NumberPhoneProps = {
  width: number;
  height: number;
}

function NumberPhone({ width, height }: NumberPhoneProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
      <Path
        d="M16.103 2.404A3.894 3.894 0 0011.474.14L2.881 2.483A3.918 3.918 0 000 6.252C0 30.41 19.589 50 43.748 50c1.758 0 3.3-1.182 3.77-2.88l2.343-8.594a3.894 3.894 0 00-2.265-4.629l-9.375-3.906a3.894 3.894 0 00-4.521 1.133l-3.946 4.814a33.004 33.004 0 01-15.692-15.693l4.814-3.935a3.897 3.897 0 001.133-4.521l-3.906-9.375v-.01z"
        fill="#000"
      />
    </Svg>
  );
}

export default NumberPhone;
