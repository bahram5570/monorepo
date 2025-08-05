'use client';

import { currentDate, jalaaliScriptDate } from '@utils/dates';

import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import NoteItem from '@components/women/pages/mainRoutes/calendar/CalendarDraggingPanel/SelectedDayNote/SelectedDayNoteList/NoteItem';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

import NoteContainerListSkeleton from './NoteContainerListSkeleton';
import useGetData from './__hooks__/useGetData';

const { gDate } = currentDate();

const NoteContainerList = () => {
  const { colors } = useTheme();
  const { isLoading, currentNoteList } = useGetData();
  const { calendarInitailSelectedDate } = useCurrentDateInSigns();
  const selectedDate = calendarInitailSelectedDate;
  const hasData = currentNoteList && currentNoteList.length > 0;

  const currentDate = selectedDate ? moment(selectedDate, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm') : gDate;
  const gregorianMoment = moment(currentDate, 'YYYY-MM-DD');
  const jalaaliDate = gregorianMoment.format('jYYYY/jMM/jDD');

  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'CreateNewNote',
      linkTo: `/protected/note/addNote`,
    });
  };

  return (
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript="یادداشت ها"
      backgroundColor={colors.Grey_50}
      headerBackgroundColor={colors.Grey_50}
      paddingTop={0}
    >
      {isLoading && <NoteContainerListSkeleton />}
      {!isLoading && (
        <div className="flex flex-col min-h-[100dvh] gap-3 pb-6 px-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          <div className="flex items-center justify-center gap-3">
            <div
              style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
              className="h-0 w-24"
            ></div>
            <Typography scale="Body" size="Large" color="Neutral_OnBackground" textAlign="center">
              {jalaaliScriptDate(jalaaliDate)}
            </Typography>
            <div
              style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
              className="h-0 w-24"
            ></div>
          </div>

          {hasData &&
            currentNoteList.map((note) => {
              return <NoteItem noteItem={note} key={note.noteId} hasNoteListPage />;
            })}
        </div>
      )}
      <div className="flex justify-center items-center mt-auto">
        <div
          style={{ background: colors.PrimaryWoman_Primary }}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-[1px] select-none cursor-pointer w-full"
          onClick={linkTo}
          data-testid={'new-note-btn-link'}
        >
          <Typography scale="Lable" size="Large" color="White">
            یادداشت جدید
          </Typography>
        </div>
      </div>
    </WomenPageLayout>
  );
};

export default NoteContainerList;
