import { useState } from 'react';

import { currentDate, toJalaliData } from '@utils/dates';

import { NoteType } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import useApi from '@hooks/useApi';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import moment from 'moment-jalaali';

import { ResponsePropsType } from './type';

const { gDate } = currentDate();

const useGetData = () => {
  const [currentNoteList, setCurrentNoteList] = useState<NoteType[]>();
  const { calendarInitailSelectedDate } = useCurrentDateInSigns();
  const selectedDate = calendarInitailSelectedDate;

  const currentDate = selectedDate ? moment(selectedDate, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm') : gDate;

  const successHandler = (v: ResponsePropsType) => {
    const noteList = v.items;
    const hasNoteListData = noteList.length > 0;

    if (hasNoteListData) {
      const findCurrentNote = noteList.filter((note) => note.time === currentDate);
      const noteListValue = findCurrentNote.map((note) => ({
        ...note,
        dateTime: toJalaliData(note.time),
        files: note.fileName,
      }));
      setCurrentNoteList(noteListValue);
    }
  };

  const { isLoading } = useApi<ResponsePropsType>({
    api: 'date/note',
    method: 'GET',
    queryKey: ['NoteList'],
    onSuccess: successHandler,
  });

  return { isLoading, currentNoteList };
};

export default useGetData;
