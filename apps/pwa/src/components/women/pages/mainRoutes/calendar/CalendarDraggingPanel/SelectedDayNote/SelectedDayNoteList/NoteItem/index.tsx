import CheckListIcon from '@assets/icons/checkList.svg';
import { textShorter } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { NoteItemPropsType } from './type';

const NoteItem = ({ noteItem, hasNoteListPage }: NoteItemPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { noteId, title } = noteItem;

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'SelectedDayNote',
      linkTo: `/protected/note/addNote?noteId=${noteId}`,
    });
  };

  return (
    <div key={noteId} onClick={linkTo}>
      <div
        className="flex flex-row-reverse px-3 py-4 rounded-lg items-center"
        style={{ background: hasNoteListPage ? colors.White : colors.Surface_SurfaceVariant }}
      >
        <div className="border-l-2 pl-2">
          <CheckListIcon
            className="w-6 h-6 "
            style={{ fill: hasNoteListPage ? colors.White : colors.Surface_SurfaceVariant }}
          />
        </div>
        <div className="pr-2">
          <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
            {textShorter(title)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
