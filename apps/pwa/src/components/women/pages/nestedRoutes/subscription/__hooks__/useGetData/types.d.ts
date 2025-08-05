import { WidgetSubscriptionCardTypes } from '@app/(women)/protected/(mainRoutes)/widgetCards';

type PackagesTypes = Pick<WidgetSubscriptionCardTypes, 'data'>['data']['package'];

export type ResponseTypes = {
  text: string;
  isValid: true;
  title: string;
  upText: string;
  endTime: string;
  downText: string;
  supportText: string;
  description: string;
  supportPhone: string;
  hasSubscribtion: boolean;
  organizationText: string;
  showCloseButton: boolean;
  packages: PackagesTypes[];
  discountCodeHelper: string;
  upTextOrganization: string;
  isShowOrganization: boolean;
  hintTextOrganization: string;
  downTextOrganization: string;
  isValidDiscountCode: boolean;
  visibleCount: number;
  medias: string[];
};
