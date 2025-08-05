import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { Link } from 'next/link';

type ExternalLinkType = Pick<ProfileResponseTypes, 'supportPhone'> & {
  typeLink: 'external';
};

type InternalLinkType = {
  typeLink: 'internal';
  link: string;
};

type LinkType = ExternalLinkType | InternalLinkType;

export type SupportLinkGeneratorType = LinkType & {
  title: string;
  discription: string;
};
