const iosWeightMatcher = (no: number) => {
  return no * (1 - 0.04);
};

const iosSizeMatcher = (no: number) => {
  return no * (1 + 0.09);
};

export const FONTS_ANDROID = {
  Headline_Large: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '115%',
    letterSpacing: '-0.72px',
  },
  Headline_Medium: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: '200%',
    letterSpacing: '-0.33px',
  },
  Headline_Small: {
    fontWeight: 700,
    fontSize: 19,
    lineHeight: '150%',
    letterSpacing: '-0.285px',
  },

  Title_Large: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '140%',
    letterSpacing: '-0.36px',
  },
  Title_Medium: {
    fontWeight: 600,
    fontSize: 19,
    lineHeight: '140%',
    letterSpacing: '-0.285px',
  },
  Title_Small: {
    fontWeight: 550,
    fontSize: 16,
    lineHeight: '140%',
    letterSpacing: '-0.24px',
  },

  Body_Large: {
    fontWeight: 400,
    fontSize: 15,
    lineHeight: '160%',
    letterSpacing: '-0.225px',
  },
  Body_Medium: {
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '160%',
    letterSpacing: '-0.325px',
  },
  Body_Small: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '160%',
    letterSpacing: '-0.3px',
  },

  Lable_LargeProminet: {
    fontWeight: 700,
    fontSize: 15,
    lineHeight: '140%',
    letterSpacing: '-0.15px',
  },
  Lable_Large: {
    fontWeight: 600,
    fontSize: 15,
    lineHeight: '140%',
    letterSpacing: '-0.375px',
  },
  Lable_MediumProminet: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: '160%',
    letterSpacing: '-0.195px',
  },
  Lable_Medium: {
    fontWeight: 600,
    fontSize: 13,
    lineHeight: '160%',
    letterSpacing: '-0.195px',
  },
  Lable_SmallProminet: {
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '130%',
    letterSpacing: '-0.18px',
  },
  Lable_Small: {
    fontWeight: 600,
    fontSize: 11,
    lineHeight: '130%',
    letterSpacing: '-0.165px',
  },
};

export const FONTS_IOS = {
  Headline_Large: {
    fontWeight: iosWeightMatcher(700),
    fontSize: 40,
    lineHeight: '115%',
    letterSpacing: '-1.5px',
  },
  Headline_Medium: {
    fontWeight: 600,
    fontSize: 23,
    lineHeight: '200%',
    letterSpacing: '-1.1px',
  },
  Headline_Small: {
    fontWeight: 550,
    fontSize: iosSizeMatcher(19),
    lineHeight: '150%',
    letterSpacing: '-0.5px',
  },

  Title_Large: {
    fontWeight: iosWeightMatcher(600),
    fontSize: iosSizeMatcher(24),
    lineHeight: '140%',
    letterSpacing: '-0.36px',
  },
  Title_Medium: {
    fontWeight: iosWeightMatcher(600),
    fontSize: iosSizeMatcher(19),
    lineHeight: '140%',
    letterSpacing: '-0.285px',
  },
  Title_Small: {
    fontWeight: 500,
    fontSize: iosSizeMatcher(16),
    lineHeight: '140%',
    letterSpacing: '-0.24px',
  },

  Body_Large: {
    fontWeight: iosWeightMatcher(400),
    fontSize: iosSizeMatcher(15),
    lineHeight: '160%',
    letterSpacing: '-0.225px',
  },
  Body_Medium: {
    fontWeight: 400,
    fontSize: iosSizeMatcher(13),
    lineHeight: '160%',
    letterSpacing: '-0.325px',
  },
  Body_Small: {
    fontWeight: iosWeightMatcher(400),
    fontSize: iosSizeMatcher(12),
    lineHeight: '160%',
    letterSpacing: '-0.3px',
  },

  Lable_LargeProminet: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '140%',
    letterSpacing: '-1.1px',
  },
  Lable_Large: {
    fontWeight: iosWeightMatcher(600),
    fontSize: iosSizeMatcher(15),
    lineHeight: '140%',
    letterSpacing: '-0.375px',
  },
  Lable_MediumProminet: {
    fontWeight: 600,
    fontSize: iosSizeMatcher(13),
    lineHeight: '160%',
    letterSpacing: '-0.9px',
  },
  Lable_Medium: {
    fontWeight: 500,
    fontSize: iosSizeMatcher(13),
    lineHeight: '160%',
    letterSpacing: '-0.195px',
  },
  Lable_SmallProminet: {
    fontWeight: iosWeightMatcher(600),
    fontSize: iosSizeMatcher(12),
    lineHeight: '130%',
    letterSpacing: '-0.18px',
  },
  Lable_Small: {
    fontWeight: iosWeightMatcher(600),
    fontSize: iosSizeMatcher(11),
    lineHeight: '130%',
    letterSpacing: '-0.165px',
  },
};
