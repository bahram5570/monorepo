import { SlidesNavigationProps } from './types';

const SlidesNavigation = ({ slideIndexHandler }: SlidesNavigationProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between z-10">
      <div className="w-full h-full" onClick={() => slideIndexHandler(false)} />
      <div className="w-full h-full" onClick={() => slideIndexHandler(true)} />
    </div>
  );
};

export default SlidesNavigation;
