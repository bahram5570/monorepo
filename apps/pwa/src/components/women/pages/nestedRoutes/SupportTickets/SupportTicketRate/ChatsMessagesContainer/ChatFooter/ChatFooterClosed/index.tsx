import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ChatFooterClosed = () => {
  const { colors } = useTheme();
  const { ticketId } = useParams();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div className="w-full flex-col flex items-center justify-center gap-2 p-3">
      <div className="flex flex-col justify-center items-center gap-2">
        <Typography scale="Lable" size="LargeProminet" color="PrimaryWoman_Primary">
          تیکت بسته شده
        </Typography>
        <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant" textAlign="center">
          با ثبت نظرت، کمک بزرگی به تیم ایمپو برای بهبود اپلیکیشن خواهی کرد
        </Typography>
      </div>

      <Link
        href={`/protected/supportTicket/${ticketId}/rate`}
        onClick={() => pageNavigationHandler({ id: 'ChatFooterClosed', showProgressBar: true })}
        style={{ background: colors.PrimaryWoman_Primary }}
        className="w-full flex justify-center items-center rounded-full py-3 px-6"
      >
        <Typography scale="Title" size="Small" color="PrimaryMan_OnPrimaryMan">
          ثبت نظر
        </Typography>
      </Link>
    </div>
  );
};

export default ChatFooterClosed;
