import { Fragment } from 'react';

import CustomImage from '@components/ui/CustomImage';
import useTheme from '@hooks/useTheme';

import { WidgetOvulationHistoryCardDescriptionDescriptionProps } from './types';

const WidgetOvulationHistoryCardDescription = ({
  isPdfDownloading,
  description,
  icon,
}: WidgetOvulationHistoryCardDescriptionDescriptionProps) => {
  const { typography, colors } = useTheme();
  const fontStyle = typography.Body.Small;

  const descriptionList = description.split('،');

  return (
    <div className="w-full">
      {!isPdfDownloading && <CustomImage src={icon} width={56} height={56} className="float-start mr-6 -mt-5" />}

      <p
        style={{
          ...fontStyle,
          direction: 'rtl',
          textAlign: 'justify',
          color: colors.Neutral_OnBackground,
        }}
      >
        {isPdfDownloading && description}

        {!isPdfDownloading &&
          descriptionList.map((ch, index) => (
            <Fragment key={index}>
              {ch}
              {descriptionList.length - 1 > index && (
                <>
                  ، <br />
                </>
              )}
            </Fragment>
          ))}
      </p>
    </div>
  );
};

export default WidgetOvulationHistoryCardDescription;
