type NewTypes = WidgetInfo & {
  type: 'newWidget';
};

type EditTypes = WidgetInfo & {
  id: string;
  type: 'editWidget';
};

export type NewLinkProps = NewTypes | EditTypes;

export type FooterNavLinkPropsType = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
  pathList: string[];
  backgroundImage?: string;
  backgroundColorList?: [string, string];
};
