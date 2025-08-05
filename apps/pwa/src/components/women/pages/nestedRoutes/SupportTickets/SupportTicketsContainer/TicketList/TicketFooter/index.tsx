import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { TicketFooterPropsType } from './type';

const TicketFooter = ({ id, title }: TicketFooterPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <footer className="mt-auto flex flex-col justify-center items-center w-full p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <Typography scale="Title" size="Small" color="Surface_OnSurfaceVariant">
          مشکلت رو تو سوالات بالا پیدا نکردی؟
        </Typography>
        <Link
          onClick={() => pageNavigationHandler({ id: 'supportChat', showProgressBar: true })}
          href={{ pathname: '/protected/contactSupport', query: { id, name: title } }}
          style={{ backgroundColor: colors.PrimaryWoman_Primary }}
          className="px-6 py-3 rounded-full"
        >
          <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
            ارتباط با پشتیبانی
          </Typography>
        </Link>
      </div>
    </footer>
  );
};

export default TicketFooter;
