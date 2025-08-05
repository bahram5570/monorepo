export type ColorsTypes = 'primary' | 'pink' | 'surface' | 'onSurface' | 'onBackground' | 'error' | 'outline';
export type VariantTypes = 'fill' | 'outline' | 'text';

export interface UseButtonColorsProps {
  variant: VariantTypes;
  color: ColorsTypes;
}

type DesignSystemTyps = {
  color: ColorsTypes;
};
type FreeTyps = {
  color: 'FREE-STYLES';
  buttonColor: string;
  contentsColor: string;
};

export type ButtonColorsSystemTypes = DesignSystemTyps | FreeTyps;

export type useComponentColors = ButtonColorsSystemTypes & {
  variant: VariantTypes;
};

type ColorListTypes = {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

type VariantListTypes = {
  [key in ColorsTypes]: ColorListTypes;
};

export type FreeStylesTableTypes = {
  [key in VariantTypes]: ColorListTypes;
};

export type SystemStylesTableTypes = {
  [key in VariantTypes]: VariantListTypes;
};
