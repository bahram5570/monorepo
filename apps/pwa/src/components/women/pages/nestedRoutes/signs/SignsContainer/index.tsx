import SignsLists from './SignsLists';
import SignsSelectDay from './SignsSelectDay';
import { SIGNS_SELECT_DAY_HEIGHT } from './SignsSelectDay/constants';
import useSignsSlide from './__hooks__/useSignsSlide';
import { SignsContainerProps } from './types';

const SignsContainer = ({ infoList }: SignsContainerProps) => {
  const { slide, slideHandler } = useSignsSlide({ infoList });

  return (
    <>
      <div className="relative w-full pb-4 z-0" style={{ paddingTop: SIGNS_SELECT_DAY_HEIGHT }}>
        <SignsSelectDay slide={slide} slideHandler={slideHandler} infoList={infoList} />
        <SignsLists slide={slide} slideHandler={slideHandler} infoList={infoList} />
      </div>
    </>
  );
};

export default SignsContainer;
