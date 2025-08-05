import { colorMaker, sizesMaker } from './__utils__';
import { SpinnerTypes } from './types';

const Spinner = ({ size, color }: SpinnerTypes) => {
  const sizes = sizesMaker(size);
  const colors = colorMaker(color);

  return (
    <div style={{ ...sizes, ...colors }} className="rounded-full border-[2px] !border-t-transparent animate-spin" />
  );
};

export default Spinner;
