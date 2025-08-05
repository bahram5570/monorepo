import ArrowIcon from '@assets/icons/calendarArrow.svg';
import PenIcon from '@assets/icons/pen.svg';

import Typography from '@components/ui/Typography';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { SelectedDayNoNotePropsType } from './type';

const SelectedDayNoNote = ({ date }: SelectedDayNoNotePropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { changeCurrentDate } = useCurrentDateInSigns();

  const linkTo = () => {
    changeCurrentDate(date);

    pageNavigationHandler({
      showProgressBar: true,
      id: 'SelectedDayNote',
      linkTo: '/protected/note/addNote',
    });
  };

  return (
    <div className="flex flex-row-reverse items-center justify-between py-2" onClick={linkTo}>
      <div className="flex flex-row-reverse items-center gap-2">
        <div
          className="w-12 h-12  flex justify-center items-center rounded-full"
          style={{
            backgroundColor: colors.Surface_SurfaceVariant,
          }}
        >
          <PenIcon className="w-6 h-auto" />
        </div>
        <Typography scale="Body" size="Large">
          اولین یادداشت امروز رو ثبت کن
        </Typography>
      </div>

      <ArrowIcon className="w-6 h-6" style={{ stroke: colors.Surface_Outline }} />
    </div>
  );
};

export default SelectedDayNoNote;
