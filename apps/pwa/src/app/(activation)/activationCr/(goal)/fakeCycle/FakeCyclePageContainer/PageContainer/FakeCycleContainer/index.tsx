import { useState } from 'react';

// import { MAX_SCREEN_WIDTH } from '@constants/app.constants'
// import useTheme from '@hooks/useTheme';
import ArticlesWebSite from './ArticlesWebSite';
// import PageIcons from './PageIcons';
// import { FAKE_CYCLE_FOOTER_HEIGTH, FAKE_CYCLE_FOOTER_LIST } from './constants';
import { FakeCycleContainerProps, SelectedPageTypes } from './types';

const FakeCycleContainer = ({ children }: FakeCycleContainerProps) => {
  // const { colors } = useTheme();
  const [selectedPage, setSelectedPage] = useState<SelectedPageTypes>('cycle');

  return (
    <div className="relative">
      {selectedPage === 'cycle' && <>{children}</>}
      {selectedPage === 'articles' && <ArticlesWebSite />}

      {/* <div
        className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-2 grid grid-flow-col z-30"
        style={{
          backgroundColor: colors.Neutral_Background,
          height: FAKE_CYCLE_FOOTER_HEIGTH,
          maxWidth: MAX_SCREEN_WIDTH,
        }}
      >
        {FAKE_CYCLE_FOOTER_LIST.map((item, index) => (
          <PageIcons
            selectedHandler={() => setSelectedPage(item.name)}
            isSelected={selectedPage === item.name}
            title={item.title}
            Icon={item.Icon}
            key={index}
          />
        ))}
      </div> */}
    </div>
  );
};

export default FakeCycleContainer;
