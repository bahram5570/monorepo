import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { SelectedTypographyTypes, TypographyProps } from './types';

const Typography = (props: TypographyProps) => {
  const { typography, colors } = useTheme();

  let selectedColor = colors.Neutral_OnBackground;
  switch (props.color) {
    case 'FREE-STYLE':
      selectedColor = props.freeColor;
      break;
    case undefined:
      selectedColor = colors.Neutral_OnBackground;
      break;
    default:
      selectedColor = colors[props.color];
      break;
  }

  let selectedTypography: SelectedTypographyTypes = {};
  switch (props.scale) {
    case 'Body':
      selectedTypography = typography[props.scale][props.size];
      break;
    case 'Headline':
      selectedTypography = typography[props.scale][props.size];
      break;
    case 'Lable':
      selectedTypography = typography[props.scale][props.size];
      break;
    case 'Title':
      selectedTypography = typography[props.scale][props.size];
      break;
  }

  return (
    <>
      {props.children && (
        <p
          className={`w-fit z-30 h-fit select-none ${props.className}`}
          style={{
            ...props.style,
            direction: 'rtl',
            color: selectedColor,
            ...selectedTypography,
            whiteSpace: 'pre-line',
            textAlign: props.textAlign,
          }}
        >
          {props.toEnglishNumber ? toEnglishNumbers(props.children) : toPersianNumbers(props.children)}
        </p>
      )}
    </>
  );
};

export default Typography;
