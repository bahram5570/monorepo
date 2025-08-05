import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { ClickHandlerTypes, PopupDialogProps } from './types';

const PopupDialog = ({ data }: PopupDialogProps) => {
  const { actionHandler } = useWidgetActions();

  const clickHandler: ClickHandlerTypes = (name) => {
    if (name === 'first') {
      actionHandler(data.first.action);
    }

    if (name === 'second') {
      if (data.second) {
        actionHandler(data.second.action);
      }
    }
  };

  const image = typeof data.image !== 'undefined' && data.image.trim() !== '' ? data.image : null;

  return (
    <div className="w-full flex flex-col items-center">
      {image && <CustomImage src={image} width={56} height={56} className="mb-4" />}

      <Typography scale="Title" size="Medium" textAlign="center" color="Neutral_OnSurface">
        {data.title || ''}
      </Typography>

      <Typography scale="Body" size="Medium" textAlign="center" color="Neutral_OnSurface" className="mt-1 mb-5">
        {data.description || ''}
      </Typography>

      <div className="w-full flex items-center gap-2">
        <Button
          size="medium"
          variant="fill"
          color="FREE-STYLES"
          style={{ direction: 'rtl' }}
          onClick={() => clickHandler('first')}
          buttonColor={colorFormatConverter(data.first.backgroundColor)}
          contentsColor={colorFormatConverter(data.first.foregroundColor)}
        >
          {data.first.text}
        </Button>

        {data.second && (
          <Button
            size="medium"
            variant="fill"
            color="FREE-STYLES"
            style={{ direction: 'rtl' }}
            onClick={() => clickHandler('second')}
            buttonColor={colorFormatConverter(data.second.backgroundColor)}
            contentsColor={colorFormatConverter(data.second.foregroundColor)}
          >
            {data.second.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PopupDialog;
