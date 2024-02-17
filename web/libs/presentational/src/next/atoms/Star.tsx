import { IStar } from '@business-layer/services/entities';
import CWEBFAIcon from './CWEBFAIcon';
function Star({ type, color, size }: IStar) {
  return <CWEBFAIcon iconName={type} color={color} size={size} />;
}

export default Star;
