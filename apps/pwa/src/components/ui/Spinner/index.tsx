import useComponentButtonColors from '../__utils__/useComponentColors';

import { SpinnerProps } from './types';

const Spinner = (props: SpinnerProps) => {
  let color;
  switch (props.color) {
    case undefined:
      color = 'primary';
      break;
    case 'FREE-STYLES':
      color = props.borderColor;
      break;
    default:
      color = props.color;
      break;
  }

  const { colorStyles } = useComponentButtonColors({
    contentsColor: color,
    buttonColor: color,
    color: props.color,
    variant: 'fill',
  });

  const styles = {
    width: props.width || 30,
    height: props.width || 30,
    borderWidth: props.borderWidth || 2,
    borderColor: colorStyles.borderColor,
  };

  return (
    <div
      style={{ ...styles, borderTopColor: 'transparent' }}
      className="border-t-transparent rounded-full animate-spin"
    />
  );
};

export default Spinner;
