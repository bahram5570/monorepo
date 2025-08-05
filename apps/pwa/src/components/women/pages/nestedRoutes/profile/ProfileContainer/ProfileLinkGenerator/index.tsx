import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';

import { ProfileGeneratorProps } from './type';

const ProfileLinkGenerator = ({ Icon, link, name, isLastItem }: ProfileGeneratorProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <Link
      href={link}
      onClick={() => pageNavigationHandler({ id: 'ProfileLinkGenerator', showProgressBar: true })}
      className="flex flex-row items-center justify-end w-full  px-5"
    >
      <div className="flex flex-row items-center gap-3 justify-end w-full">
        <div className={`${isLastItem ? 'border-none' : 'border-b-[1px]'}  py-4 w-full flex justify-end items-center`}>
          <Typography scale="Body" size="Large">
            {name}
          </Typography>
        </div>
        {<Icon className="w-10 h-10" />}
      </div>
    </Link>
  );
};

export default ProfileLinkGenerator;
