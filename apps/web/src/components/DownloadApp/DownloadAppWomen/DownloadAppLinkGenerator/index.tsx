import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';

import { DownloadAppLinkGeneratorTypes } from './types';

const DownloadAppLinkGenerator = ({ href, children, id }: DownloadAppLinkGeneratorTypes) => {
  return (
    <CustomLink
      id={id}
      href={href}
      target="_blank"
      aria-label={href}
      style={{ backgroundColor: COLORS_LIST.White, borderColor: COLORS_LIST.Neutral_Surface }}
      className="w-full h-12 lg:h-[60px] px-2 border-[1px] rounded-full flex items-center justify-center"
    >
      {children}
    </CustomLink>
  );
};

export default DownloadAppLinkGenerator;
