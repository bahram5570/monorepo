import { useEffect, useState } from 'react';

import useNameSelectorData from '../../../../../__hooks__/useNameSelectorData';
import { StartingLetterInfoTypes } from './types';

const specialCharacters = ['ا', 'آ', 'الف'];
const initialData: StartingLetterInfoTypes = { lastIndex: 0, list: {} };

const useNameSelectorStartingLetter = () => {
  const { data, applyFilters } = useNameSelectorData();
  const [startingLetterInfo, setStartingLetterInfo] = useState<StartingLetterInfoTypes>(initialData);

  const allData = data?.all;

  useEffect(() => {
    if (applyFilters) {
      setStartingLetterInfo(initialData);
    }
  }, [applyFilters]);

  useEffect(() => {
    if (allData) {
      const copyStartingLetter = { ...startingLetterInfo };

      for (let i = copyStartingLetter.lastIndex; i < allData.length; i++) {
        let currentLetter = allData[i].title[0];
        currentLetter = specialCharacters.includes(currentLetter) ? 'الف' : currentLetter;

        let latestLetter = copyStartingLetter.list[copyStartingLetter.lastIndex]?.letter;
        latestLetter = specialCharacters.includes(latestLetter) ? 'الف' : latestLetter;

        if (latestLetter !== currentLetter) {
          copyStartingLetter.lastIndex = i;
          copyStartingLetter.list = { ...copyStartingLetter.list, [i]: { letter: currentLetter } };
          setStartingLetterInfo(copyStartingLetter);
        }
      }
    }
  }, [allData]);

  return { startingLetterInfo };
};

export default useNameSelectorStartingLetter;
