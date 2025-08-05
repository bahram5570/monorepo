import CustomImage from '@components/ui/CustomImage';
import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';

import { SlidesProps } from './types';

const Slides = ({ slides }: SlidesProps) => {
  return (
    <div className="w-full">
      <Typography scale="Title" size="Small" className="w-full p-6">
        ایمپو چطور می‌تونه کمکت کنه؟
      </Typography>

      <CustomSlider gap={0}>
        {slides.map((item, index) => (
          <div className="pointer-events-none min-w-[290px] h-[320px] " key={index}>
            <CustomImage src={item} width={'100%'} height={'100%'} objectFit="contain" />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default Slides;
