import { WidgetPragnencyBreastfeedingCardProps } from '@components/women/Widgets/widgetGenerator/WidgetPragnencyBreastfeedingCard/types';
import { WidgetPredictCardProps } from '@components/women/Widgets/widgetGenerator/WidgetPredictCard/types';
import { GoalNamesEnum } from '@constants/activation.constants';
import useTheme from '@hooks/useTheme';

import { BottomPartDataTypes, PredictFooterTypes } from './types';

const useBottomPartData = () => {
  const { colors } = useTheme();

  const intentionData: WidgetPredictCardProps = {
    data: {
      backgroundColour: '',
      description: 'اینجا تاریخ های مهمی که نباید از قلم بندازی رو میبینی',
      title: 'پیش‌بینی چرخه آیندت',
      items: [
        {
          backgroundColor: colors.Pink_50,
          icon: '/assets/images/fakeCycle/nextPeriod.png',
          eyeIconColor: colors.Pink_400,
          title: 'پریود بعدی',
          showEyeIcon: true,
          trailingDown: '',
          trailingUp: '',
        },
        {
          backgroundColor: colors.Cyan_50,
          icon: '/assets/images/fakeCycle/ovulation.png',
          eyeIconColor: colors.Cyan_400,
          title: 'تخمک گذاری بعدی',
          showEyeIcon: true,
          trailingDown: '',
          trailingUp: '',
        },
        {
          backgroundColor: colors.Purple_50,
          icon: '/assets/images/fakeCycle/pms.png',
          eyeIconColor: colors.Purple_400,
          title: 'PMS بعدی',
          showEyeIcon: true,
          trailingDown: '',
          trailingUp: '',
        },
      ],
    },
  };

  const trackerData: WidgetPredictCardProps = {
    data: {
      backgroundColour: '',
      description: 'اینجا تاریخ های مهمی که نباید از قلم بندازی رو میبینی',
      title: 'پیش‌بینی چرخه آیندت',
      items: [
        {
          backgroundColor: colors.Pink_50,
          icon: '/assets/images/fakeCycle/nextPeriod.png',
          eyeIconColor: colors.Pink_400,
          title: 'پریود بعدی',
          showEyeIcon: true,
          trailingDown: '',
          trailingUp: '',
        },
        {
          backgroundColor: colors.Cyan_50,
          icon: '/assets/images/fakeCycle/ovulation.png',
          eyeIconColor: colors.Cyan_400,
          title: 'تخمک گذاری بعدی',
          showEyeIcon: true,
          trailingDown: '',
          trailingUp: '',
        },
        {
          backgroundColor: colors.Purple_50,
          icon: '/assets/images/fakeCycle/pms.png',
          eyeIconColor: colors.Purple_400,
          title: 'PMS بعدی',
          showEyeIcon: true,
          trailingDown: '',
          trailingUp: '',
        },
      ],
    },
  };

  const pregnancyData: WidgetPragnencyBreastfeedingCardProps = {
    data: {
      backgroundColour: '',
      description: '',
      title: 'نمایش هفته به هفته اطلاعات جنین',
      image: '/assets/images/fakeCycle/baby.png',
      trailingIcon: '/assets/images/fakeCycle/trailingIcon.png',
      trailing: 'اینجا هر هفته براساس رشد جنینت، بهت اطلاعات جذابی میدیم!',
      tiles: [
        {
          text: '',
          name: 'قد',
          showEyeIcon: true,
          eyeIconColor: '0xFF7E7E7E',
          icon: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/PERGNANSYVIJET/Height.svg',
        },
        {
          text: '',
          name: 'وزن',
          showEyeIcon: true,
          eyeIconColor: '0xFF7E7E7E',
          icon: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/PERGNANSYVIJET/Weight.svg',
        },
      ],
    },
  };

  const intentionFooter: PredictFooterTypes = {
    btn: 'مشاهده پیش‌بینی',
    script: 'میخوای بدونی تاریخ های مهم چرخه آیندت چه موقعی هست؟',
  };

  const trackerFooter: PredictFooterTypes = {
    btn: 'مشاهده پیش‌بینی',
    script: 'میخوای بدونی تاریخ های مهم چرخه آیندت چه موقعی هست؟',
  };

  const pregnancyFooter: PredictFooterTypes = {
    btn: 'محاسبه هفته بارداری',
    script: 'میخوای هفته به هفته از اطلاعت جنینت با خبر باشی؟',
  };

  const intentionSlides = [
    '/assets/images/fakeCycle/intentionSlide1.webp',
    '/assets/images/fakeCycle/intentionSlide2.webp',
    '/assets/images/fakeCycle/intentionSlide3.webp',
    '/assets/images/fakeCycle/intentionSlide4.webp',
  ];

  const trackerSlides = [
    '/assets/images/fakeCycle/periodSlide1.webp',
    '/assets/images/fakeCycle/periodSlide2.webp',
    '/assets/images/fakeCycle/periodSlide3.webp',
    '/assets/images/fakeCycle/periodSlide4.webp',
  ];

  const pregnancySlides = [
    '/assets/images/fakeCycle/pregnancySlide1.webp',
    '/assets/images/fakeCycle/pregnancySlide2.webp',
    '/assets/images/fakeCycle/pregnancySlide3.webp',
    '/assets/images/fakeCycle/pregnancySlide4.webp',
  ];

  const bottomPartData: BottomPartDataTypes = {
    [GoalNamesEnum.INTENTION]: {
      predictData: intentionData,
      predictFooter: intentionFooter,
      goal: GoalNamesEnum.INTENTION,
      slides: intentionSlides,
    },
    [GoalNamesEnum.PREGNANCY]: {
      predictData: pregnancyData,
      predictFooter: pregnancyFooter,
      goal: GoalNamesEnum.PREGNANCY,
      slides: pregnancySlides,
    },
    [GoalNamesEnum.TRACKER]: {
      predictData: trackerData,
      predictFooter: trackerFooter,
      goal: GoalNamesEnum.TRACKER,
      slides: trackerSlides,
    },
  };

  return bottomPartData;
};

export default useBottomPartData;
