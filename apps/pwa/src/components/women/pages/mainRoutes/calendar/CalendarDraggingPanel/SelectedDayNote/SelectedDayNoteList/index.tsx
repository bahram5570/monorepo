import Typography from '@components/ui/Typography';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import CreateNewNoteBtn from './CreateNewNoteBtn';
import NoteItem from './NoteItem';
import { SelectedDayNoteListPropsList } from './type';

const SelectedDayNoteList = ({ noteList, date }: SelectedDayNoteListPropsList) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { changeCurrentDate } = useCurrentDateInSigns();

  const linkTo = () => {
    changeCurrentDate(date);

    pageNavigationHandler({
      showProgressBar: true,
      id: 'noteList',
      linkTo: `/protected/note/noteList`,
    });
  };

  const updatedList = noteList.slice(0, 3);

  return (
    <div className="flex flex-col gap-3">
      {updatedList.map((note) => {
        return <NoteItem noteItem={note} key={note.noteId} hasNoteListPage={false} />;
      })}

      <div className="flex items-center justify-center " onClick={linkTo}>
        <div
          style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
          className="h-0 w-24"
        ></div>
        <Typography
          scale="Lable"
          size="Medium"
          color="Neutral_OnBackground"
          textAlign="center"
          className="mb-1 p-0 w-full"
        >
          مشاهده همه یادداشت‌ها
        </Typography>
        <div
          style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
          className="h-0 w-24"
        ></div>
      </div>
      <CreateNewNoteBtn date={date} />
    </div>
  );
};

export default SelectedDayNoteList;
