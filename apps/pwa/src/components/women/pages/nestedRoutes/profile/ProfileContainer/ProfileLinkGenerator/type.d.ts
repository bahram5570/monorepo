import { ReactElement } from 'react';

type ProfileLinkType = {
  name: string;
  link: string;
  Icon: ReactNode;
  needsSubscription: boolean;
};

type ProfileLinkListType = ProfileLinkType[];

interface ProfileGeneratorProps extends ProfileLinkType {
  isLastItem: boolean;
}
