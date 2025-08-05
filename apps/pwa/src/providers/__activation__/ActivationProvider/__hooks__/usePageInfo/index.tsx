import { useEffect, useState } from 'react';

import { NextPageHandlerTypes, NextPageTypes, PageInfoStateTypes, UsePageInfoProps } from './types';
import useClearCurrentPagePayload from './useClearCurrentPagePayload';

const usePageInfo = ({ info, payload, activationData, payloadHandler }: UsePageInfoProps) => {
  useClearCurrentPagePayload({ payloadKeys: info.payloadKeys, payloadHandler });

  const infoData = {
    orderOfQuestionScripts: info.orderOfQuestionScripts,
    orderOfRewardElements: info.orderOfRewardElements,
    progressPercentage: info.progressPercentage,
    onMountRewardId: info.onMountRewardId,
    nextActivationList: info.nextActivationList,
    rewardData: activationData?.reward,
    noBackButton: info.noBackButton,
  };

  const initialValues: PageInfoStateTypes = {
    scripts: { description: '', subtitle: '', title: '' },
    firstName: payload.firstName,
    rewardId: undefined,
    nextActivation: '',
    ...infoData,
  };

  const rewardData = activationData?.reward;
  const questionData = activationData?.question;

  const options = questionData?.[info?.questionId]?.page.options;

  const [pageInfo, setPageInfo] = useState<PageInfoStateTypes>(initialValues);

  useEffect(() => {
    return () => {
      setPageInfo(initialValues);
    };
  }, []);

  const nextPageHandler: NextPageHandlerTypes = (v) => {
    const result: NextPageTypes = { rewardId: v.rewardId, nextActivation: v.nextActivation };
    setPageInfo((state) => ({ ...state, ...result }));
  };

  useEffect(() => {
    if (questionData && rewardData) {
      const replaceCharacters = (txt: string) => {
        return txt.replace('@اسم', payload.firstName || 'ایمپویی').replace(/\r\n/, '\n');
      };

      const scripts = questionData?.[info.questionId]?.page;
      const title = replaceCharacters(scripts?.title || '');
      const subtitle = replaceCharacters(scripts?.subtitle || '');
      const description = replaceCharacters(scripts?.description || '');

      setPageInfo({ ...pageInfo, rewardData, scripts: { description, subtitle, title } });
    }
  }, [questionData, rewardData]);

  return { pageInfo, nextPageHandler, options };
};

export default usePageInfo;
