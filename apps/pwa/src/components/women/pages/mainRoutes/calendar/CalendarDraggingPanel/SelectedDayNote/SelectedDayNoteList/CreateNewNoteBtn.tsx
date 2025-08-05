import PlusIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { CreateNewNoteBtnPropsType } from './type';

const CreateNewNoteBtn = ({ date }: CreateNewNoteBtnPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { changeCurrentDate } = useCurrentDateInSigns();

  const linkTo = () => {
    changeCurrentDate(date);
    pageNavigationHandler({
      showProgressBar: true,
      id: 'CreateNewNote',
      linkTo: `/protected/note/addNote`,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div
        style={{ background: colors.PrimaryWoman_Primary }}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-[1px] select-none cursor-pointer w-full"
        onClick={linkTo}
      >
        <Typography scale="Lable" size="Large" color="White">
          ثبت یادداشت جدید
        </Typography>

        <PlusIcon className="w-[18px]  h-auto" style={{ stroke: colors.White, fill: colors.White }} />
      </div>
    </div>
  );
};

export default CreateNewNoteBtn;
