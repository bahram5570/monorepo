import useApi from '@hooks/useApi';
import useTimer from '@hooks/useTimer';

import { useEffect, useState } from 'react';

import { ArticlesSearchListTypes, ArticlesSearchResponseTypes } from './types';

const useArticlesSearch = () => {
  const [value, setValue] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [articlesSearchList, setArticlesSearchList] = useState<ArticlesSearchListTypes>([]);

  const successHandler = (v: ArticlesSearchResponseTypes) => {
    setIsListOpen(true);
    setArticlesSearchList(v.articles);
  };

  const { isLoading, callApi } = useApi<ArticlesSearchResponseTypes>({
    onSuccess: successHandler,
    url: `support/article/articles/search/${value}`,
  });

  const { startTimer, stopTimer } = useTimer(1, callApi);

  const valueHandler = (v: string) => {
    setValue(v);
  };

  const closeHandler = () => {
    setValue('');
    setIsListOpen(false);
    setArticlesSearchList([]);
  };

  useEffect(() => {
    if (value.trim().length > 2) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [value]);

  return { value, valueHandler, closeHandler, isLoading, articlesSearchList, isListOpen };
};

export default useArticlesSearch;
