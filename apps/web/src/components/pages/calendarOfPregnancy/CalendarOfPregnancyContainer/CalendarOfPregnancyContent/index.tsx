'use client';

import { useEffect, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';

const CalendarOfPregnancyContent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) {
      return;
    }

    const handleEnd = () => setShowCover(true);
    const handlePlay = () => setShowCover(false);

    el.addEventListener('ended', handleEnd);
    el.addEventListener('play', handlePlay);

    return () => {
      el.removeEventListener('ended', handleEnd);
      el.removeEventListener('play', handlePlay);
    };
  }, []);

  const playHandler = () => {
    const el = videoRef.current;

    if (el) {
      el.play();
      setShowCover(false);
    }
  };

  return (
    <>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pb-2 text-center">
        تقویم بارداری هفته به هفته و ماهانه
      </CustomTypography>

      <CustomTypography className="!text-center pt-2 pb-6">
        تقویم بارداری، شامل ۴۰ هفته یا ۲۸۰ روز است. سن بارداری و تاریخ زایمان، با توجه به تاریخ آخرین پریود محاسبه
        می‌شود. تقویم حاملگی به سه دوره سه ماهه اول، دوم و سوم تقسیم می‌شود. سه ماهه اول شامل هفته‌های اول تا سیزدهم
        است. در سه ماهه دوم تشخیص جنسیت جنین انجام می‌شود و شامل هفته‌های ۱۴ تا ۲۷ است.سه ماهه سوم بارداری نیز به
        هفته‌های ۲۸ تا ۴۰ گفته می‌شود؛ با این حال تاریخ زایمان معمولا بین هفته‌های ۳۹ تا ۴۱ متغیر است.
      </CustomTypography>

      <div className="relative ">
        <video
          ref={videoRef}
          controls={true}
          style={{ opacity: showCover ? 0 : 1 }}
          className="w-full max-h-[300px] md:max-h-[400px] h-auto"
        >
          <source src="https://s3.ir-tbz-sh1.arvanstorage.ir/impo/Marketing/Back_2.webm" />
        </video>

        {showCover && (
          <div className="absolute top-0 left-0 right-0 bottom-0" onClick={playHandler}>
            <CustomImage src="/assets/images/pregnancyVideoCover.webp" alt="" fill={true} className="object-contain" />
          </div>
        )}
      </div>

      <CustomTypography fontSize="Body_Small" color="Surface_Outline" className="text-center pt-8">
        در ویدیوی بالا، مراحل رشد جنین در هفته‌های مختلف بارداری را مشاهده کنید.
      </CustomTypography>

      <CalendarOfPregnancySeperator />
    </>
  );
};

export default CalendarOfPregnancyContent;
