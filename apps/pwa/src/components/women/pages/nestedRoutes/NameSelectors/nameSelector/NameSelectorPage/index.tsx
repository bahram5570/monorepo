'use client';

import { NameSelectorTabsEnum } from '../NameSelectorLayout/enum';
import useNameSelectorTabs from '../__hooks__/useNameSelectorTabs';
import NameSelectorAll from './NameSelectorAll';
import NameSelectorFavorites from './NameSelectorFavorites';
import NameSelectorSuggestion from './NameSelectorSuggestion';

const NameSelectorPage = () => {
  const { tab } = useNameSelectorTabs();

  return (
    <>
      {tab === NameSelectorTabsEnum.All && <NameSelectorAll />}
      {tab === NameSelectorTabsEnum.Favorites && <NameSelectorFavorites />}
      {tab === NameSelectorTabsEnum.Suggestion && <NameSelectorSuggestion />}
    </>
  );
};

export default NameSelectorPage;
