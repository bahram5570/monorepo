'use client';

import BackgroundImage from './BackgroundImage';
import { PartnerLayoutPropsType } from './type';

const PartnerLayout = ({ children, isValid, coverImage }: PartnerLayoutPropsType) => {
  return (
    <div className="relative w-full min-h-[100dvh] pb-[100px] ">
      <BackgroundImage isValid={isValid} coverImage={coverImage} />
      <div className={`relative flex flex-col ${coverImage ? 'gap-28' : 'gap-16'} z-10`}>{children}</div>
    </div>
  );
};

export default PartnerLayout;
