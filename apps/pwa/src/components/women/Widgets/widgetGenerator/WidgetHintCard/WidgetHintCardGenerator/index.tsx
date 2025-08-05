import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import WidgetHintCardBookmark from './WidgetHintCardBookmark';
import WidgetHintCardLinkTo from './WidgetHintCardLinkTo';
import WidgetHintCardGeneratorWriterInfo from './WidgetHintCardWriterInfo';
import useIsSeen from './__hooks__/useIsSeen';
import { WidgetHintCardGeneratorProps } from './types';

const WidgetHintCardGenerator = (props: WidgetHintCardGeneratorProps) => {
  const { colors } = useTheme();
  const { ref } = useIsSeen({ isSeen: props.isSeen, minReadingDuration: props.minReadingDuration, id: props.id });

  return (
    <div
      ref={ref}
      style={{ borderColor: colors.Neutral_Surface }}
      className={`w-full flex flex-col items-end gap-1 ${props.isLastChild ? '' : 'border-b-[1px] pb-3'}`}
    >
      <WidgetHintCardGeneratorWriterInfo
        writerName={props.writerName}
        writerIcon={props.writerIcon}
        writerSpeciality={props.writerSpeciality}
      />

      <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
        {props.text}
      </Typography>

      <div className="w-full flex items-center gap-2">
        <WidgetHintCardBookmark isBookmarked={props.isBookmarked} id={props.id} />
        <WidgetHintCardLinkTo externalLink={props.externalLink} internalLink={props.internalLink} />
      </div>
    </div>
  );
};

export default WidgetHintCardGenerator;
