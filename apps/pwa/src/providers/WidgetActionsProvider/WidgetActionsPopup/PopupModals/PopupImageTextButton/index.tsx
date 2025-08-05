import CloseIcon from '@assets/icons/plus.svg';
import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { useRouter } from 'next/navigation';

import { PopupImageTextButtonProps } from './types';

const PopupImageTextButton = ({ data }: PopupImageTextButtonProps) => {
  const router = useRouter();
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  return (
    <div className="relative w-full h-full flex flex-col items-center px-4 pt-4 pb-6">
      <div onClick={() => router.back()} className="w-12 h-12 flex items-center justify-center mr-auto">
        <CloseIcon className="w-6 h-auto rotate-45 cursor-pointer" style={{ stroke: colors.Neutral_OnSurface }} />
      </div>

      <div className="w-full min-h-[370px] mb-6">
        <CustomImage src={data.image} />
      </div>

      <div className="w-full flex flex-col items-center gap-1">
        <Typography scale="Title" size="Medium" color="Neutral_OnBackground" textAlign="center">
          {data.title}
        </Typography>

        <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="center">
          {data.description}
        </Typography>
      </div>

      <Button
        size="medium"
        variant="fill"
        color="FREE-STYLES"
        className="mt-auto"
        onClick={() => actionHandler(data.button.action)}
        buttonColor={colorFormatConverter(data.button.backgroundColor)}
        contentsColor={colorFormatConverter(data.button.foregroundColor)}
      >
        {data.button.text}
      </Button>
    </div>
  );
};

export default PopupImageTextButton;
