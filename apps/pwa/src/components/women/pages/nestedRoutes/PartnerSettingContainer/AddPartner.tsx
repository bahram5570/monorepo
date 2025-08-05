import PlusIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

const AddPartner = () => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  return (
    <>
      <Typography size="Medium" scale="Body" textAlign="right" className="w-full">
        برای شروع همدلی، پارتنرت رو اضافه کن
      </Typography>
      <Link
        href={'/protected/partner/start'}
        onClick={() => pageNavigationHandler({ id: 'PartnerProfile', showProgressBar: true })}
        className="flex flex-row items-center justify-end w-full p-1"
      >
        <div className="flex flex-row items-center gap-1 justify-end w-full bg-white p-2 rounded-xl">
          <div className={`  p-2 w-full flex justify-end items-center`}>
            <Typography scale="Body" size="Medium">
              اضافه کردن همدل
            </Typography>
          </div>
          <PlusIcon className="w-6 h-6" style={{ stroke: colors.Surface_Outline }} />
        </div>
      </Link>
    </>
  );
};

export default AddPartner;
