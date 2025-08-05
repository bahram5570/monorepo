import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import SegmentWeeksGenerator from './SegmentWeeksGenerator';
import { SegmentGeneratorPropsType } from './type';

const SegmentGenerator = ({
  backgroundColor,
  foregroundColor,
  image,
  subtitle,
  title,
  weeks,
}: SegmentGeneratorPropsType) => {
  return (
    <div className=" mt-2">
      <div
        style={{
          background: colorFormatConverter(backgroundColor),
        }}
        className="flex justify-between items-center px-3 rounded-tr-2xl rounded-tl-2xl"
      >
        <CustomImage src={image} />
        <div className="flex flex-col justify-end items-end pr-2">
          <Typography scale="Lable" size="LargeProminet" style={{ color: colorFormatConverter(foregroundColor) }}>
            {title}
          </Typography>
          <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
            {subtitle}
          </Typography>
        </div>
      </div>
      <SegmentWeeksGenerator weeks={weeks} />
    </div>
  );
};

export default SegmentGenerator;
