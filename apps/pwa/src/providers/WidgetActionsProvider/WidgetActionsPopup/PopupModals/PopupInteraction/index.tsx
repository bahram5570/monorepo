import { useEffect, useState } from 'react';

import CloseIcon from '@assets/icons/plus.svg';
import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';
import { useRouter } from 'next/navigation';

import { ClickHandlerTypes, PopupInteractionProps } from './types';

const PopupInteraction = ({ data }: PopupInteractionProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  const { actionHandler } = useWidgetActions();

  const clickHandler: ClickHandlerTypes = (name) => {
    if (name === 'first') {
      actionHandler(data.button.action);
    }

    if (name === 'second') {
      if (data.secondaryButton) {
        actionHandler(data.secondaryButton.action);
      }
    }
  };

  const [jsonFile, setJsonFile] = useState(null);

  useEffect(() => {
    if (data.image) {
      const fetchData = async () => {
        const req = await fetch(data.image || '');
        const res = await req.json();
        setJsonFile(res);
      };

      fetchData();
    }
  }, [data.image]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        onClick={() => router.back()}
        className="w-12 h-12 flex items-center justify-center absolute top-0 left-0 z-10"
      >
        <CloseIcon className="w-6 h-auto rotate-45 cursor-pointer" style={{ stroke: colors.Neutral_OnSurface }} />
      </div>

      {jsonFile && <LottieJson loop={true} animationData={jsonFile} width={250} />}

      <Typography scale="Title" size="Large">
        {data.title}
      </Typography>

      <Typography scale="Body" size="Large" className="pt-1 text-center">
        {data.description}
      </Typography>

      <div className="w-full flex items-center gap-2 pt-[114px]">
        <Button
          size="medium"
          variant="fill"
          color="FREE-STYLES"
          onClick={() => clickHandler('first')}
          buttonColor={colorFormatConverter(data.button.backgroundColor)}
          contentsColor={colorFormatConverter(data.button.foregroundColor)}
        >
          {data.button.text}
        </Button>

        {data.secondaryButton && (
          <Button
            size="medium"
            variant="fill"
            color="FREE-STYLES"
            onClick={() => clickHandler('second')}
            buttonColor={colorFormatConverter(data.secondaryButton.backgroundColor)}
            contentsColor={colorFormatConverter(data.secondaryButton.foregroundColor)}
          >
            {data.secondaryButton.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PopupInteraction;
