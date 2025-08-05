import ItemGenerator from './ItemGenerator';
import { SlidesShortTypes } from './types';

const SlidesShort = ({ list }: SlidesShortTypes) => {
  return (
    <div className="relative w-full flex justify-center items-center gap-14">
      {list.map((item, index) => (
        <ItemGenerator {...item} key={index} />
      ))}
    </div>
  );
};

export default SlidesShort;
