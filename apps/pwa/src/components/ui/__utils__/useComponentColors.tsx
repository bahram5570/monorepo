import useTheme from '@hooks/useTheme';

import { FreeStylesTableTypes, SystemStylesTableTypes, useComponentColors } from './types';

const useComponentButtonColors = (props: useComponentColors) => {
  const { colors } = useTheme();

  if (props.color === 'FREE-STYLES') {
    const freeStylesTable: FreeStylesTableTypes = {
      fill: {
        backgroundColor: props.buttonColor,
        color: props.contentsColor,
        borderColor: props.buttonColor,
      },
      outline: {
        backgroundColor: 'transparent',
        color: props.contentsColor,
        borderColor: props.buttonColor,
      },
      text: {
        backgroundColor: 'transparent',
        color: props.contentsColor,
        borderColor: 'transparent',
      },
    };

    const colorStyles = freeStylesTable[props.variant];
    return { colorStyles };
  } else {
    const sustemStylesTable: SystemStylesTableTypes = {
      fill: {
        primary: {
          backgroundColor: colors.PrimaryWoman_Primary,
          color: colors.PrimaryWoman_OnPrimary,
          borderColor: colors.PrimaryWoman_Primary,
        },
        error: {
          backgroundColor: colors.Error_Error,
          color: colors.PrimaryWoman_OnPrimary,
          borderColor: colors.Error_Error,
        },
        onSurface: {
          backgroundColor: colors.Neutral_OnSurface,
          color: colors.PrimaryWoman_OnPrimary,
          borderColor: colors.Neutral_OnSurface,
        },
        onBackground: {
          backgroundColor: colors.Neutral_OnBackground,
          color: colors.Neutral_Background,
          borderColor: colors.Neutral_OnBackground,
        },
        pink: {
          backgroundColor: colors.Pink,
          color: colors.PrimaryWoman_Primary,
          borderColor: colors.Pink,
        },
        surface: {
          backgroundColor: colors.Neutral_Surface,
          color: colors.Neutral_OnSurface,
          borderColor: colors.Neutral_Surface,
        },
        outline: {
          backgroundColor: colors.Surface_Outline,
          color: colors.Surface_OutlineVariant,
          borderColor: colors.Surface_Outline,
        },
      },
      outline: {
        primary: {
          backgroundColor: colors.Transparent,
          color: colors.PrimaryWoman_Primary,
          borderColor: colors.PrimaryWoman_Primary,
        },
        error: {
          backgroundColor: colors.Transparent,
          color: colors.Error_Error,
          borderColor: colors.Error_Error,
        },
        onSurface: {
          backgroundColor: colors.Transparent,
          color: colors.Neutral_OnSurface,
          borderColor: colors.Neutral_OnSurface,
        },
        onBackground: {
          backgroundColor: colors.Transparent,
          color: colors.Neutral_OnBackground,
          borderColor: colors.Neutral_OnBackground,
        },
        pink: {
          backgroundColor: colors.Transparent,
          color: colors.Pink,
          borderColor: colors.Pink,
        },
        surface: {
          backgroundColor: colors.Transparent,
          color: colors.Neutral_Surface,
          borderColor: colors.Neutral_Surface,
        },
        outline: {
          backgroundColor: colors.Transparent,
          color: colors.Surface_OutlineVariant,
          borderColor: colors.Surface_Outline,
        },
      },
      text: {
        primary: {
          backgroundColor: colors.Transparent,
          color: colors.PrimaryWoman_Primary,
          borderColor: colors.Transparent,
        },
        error: {
          backgroundColor: colors.Transparent,
          color: colors.Error_Error,
          borderColor: colors.Transparent,
        },
        onSurface: {
          backgroundColor: colors.Transparent,
          color: colors.Neutral_OnSurface,
          borderColor: colors.Transparent,
        },
        onBackground: {
          backgroundColor: colors.Transparent,
          color: colors.Neutral_OnBackground,
          borderColor: colors.Transparent,
        },
        pink: {
          backgroundColor: colors.Transparent,
          color: colors.PrimaryWoman_Primary,
          borderColor: colors.Transparent,
        },
        surface: {
          backgroundColor: colors.Transparent,
          color: colors.Surface_Outline,
          borderColor: colors.Transparent,
        },
        outline: {
          backgroundColor: colors.Transparent,
          color: colors.Surface_Outline,
          borderColor: colors.Transparent,
        },
      },
    };

    const colorStyles = sustemStylesTable[props.variant][props.color];
    return { colorStyles };
  }
};

export default useComponentButtonColors;
