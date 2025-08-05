'use client';

import { externalLink } from '@utils/navigation';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';

import { GO_TO_APP_LIST } from './constants';

const GoToAppId = (props: { params: { id: string } }) => {
  const id = props.params.id || 'all';
  const src = GO_TO_APP_LIST?.[id];

  const goToHandler = () => {
    externalLink('https://impo.app/#download', true);
  };

  return (
    <div className="relative w-full h-[100dvh] flex flex-col items-center">
      {typeof src !== 'undefined' && <CustomImage src={src} className="w-full h-auto" />}

      <Button
        variant="fill"
        size="medium"
        color="primary"
        className="!w-[204px] !h-[40px] mt-auto mb-6"
        onClick={goToHandler}
      >
        دانلود اپلیکیشن ایمپو
      </Button>
    </div>
  );
};

export default GoToAppId;
