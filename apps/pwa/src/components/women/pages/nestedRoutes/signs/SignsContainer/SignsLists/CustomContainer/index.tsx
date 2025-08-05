import LinkIcon from '@assets/icons/calendarSignLink.svg';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { CustomContainerPropsType } from './type';

const CustomContainer = ({ allBtnLink, children, plusIconLink, title, showAllBtn }: CustomContainerPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === allBtnLink;

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: `cutomContainer${plusIconLink}`,
      linkTo: `${plusIconLink}`,
    });
  };

  return (
    <div className=" rounded-2xl p-2 flex flex-col" style={{ background: colors.White }}>
      <div onClick={linkTo} className="divide-y-2">
        <div className="w-full flex flex-row-reverse items-center justify-between h-fit  p-3 ">
          <Typography scale="Lable" size="Large">
            {title}
          </Typography>

          <div className="relative cursor-pointer">
            <LinkIcon className="w-10 h-auto" />
          </div>
        </div>
        <>{children}</>
      </div>
      {showAllBtn && (
        <Link
          href={`${allBtnLink}`}
          style={{ background: colors.Neutral_Surface }}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border-[1px] select-none cursor-pointer z-20  my-2"
          onClick={() => {
            pageNavigationHandler({ showProgressBar: false, id: allBtnLink });
          }}
        >
          <Typography scale="Lable" size="Large" color="Black">
            مشاهده همه تست‌های انجام شده
          </Typography>
          {isLoading && <Spinner width={18} color="primary" />}
        </Link>
      )}
    </div>
  );
};

export default CustomContainer;
