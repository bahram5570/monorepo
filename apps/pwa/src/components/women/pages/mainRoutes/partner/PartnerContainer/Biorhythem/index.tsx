import { colorFormatConverter } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import BiorhythemItems from './BiorhythemItems';
import { BiorhythmPropsType } from './type';

const Biorhythm = ({ bioRhythemWidget }: BiorhythmPropsType) => {
  const { colors } = useTheme();
  const { data } = bioRhythemWidget;

  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-xl  items-end"
      style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <div className="flex justify-between items-end ">
        <Typography scale="Title" size="Small">
          {data.title}
        </Typography>
      </div>
      <div
        style={{ backgroundColor: colorFormatConverter(data.backgroundColour) }}
        className="rounded-2xl p-4 flex flex-col gap-3"
      >
        <BiorhythemItems {...data} />
      </div>
    </div>
  );
};

export default Biorhythm;
