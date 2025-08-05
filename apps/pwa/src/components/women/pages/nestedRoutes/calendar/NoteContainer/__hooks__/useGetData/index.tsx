import { useEffect, useState } from 'react';

import { CalendarTypeEnum } from '@constants/date.constants';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import moment from 'moment-jalaali';

import { INITAIL_NOTE_VALUE } from '../../constants';
import { OnchangeHandlerType } from '../../type';
import { ItemType, ResponsePropsType } from './type';

const useGetData = () => {
  const { culture } = useCulture();
  const [noteValue, setNoteValue] = useState<ItemType>(INITAIL_NOTE_VALUE);
  const { getQueryParams } = useQueryParamsHandler();
  const { calendarInitailSelectedDate } = useCurrentDateInSigns();

  const noteId = getQueryParams('noteId');

  const getDisplayDate = (date: string): string => {
    let currentDate = '';
    const gregorianMoment = moment(date, 'YYYY-MM-DD');

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
      currentDate = gregorianDate;
    }
    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
      currentDate = jalaaliMoment;
    }

    return currentDate;
  };

  const successHandler = (v: ResponsePropsType) => {
    const noteList = v.items;
    const hasNoteListData = noteList.length > 0;

    if (hasNoteListData) {
      const findCurrentNote = noteList.find((note) => note.noteId === noteId);

      if (findCurrentNote) {
        const noteValue = {
          ...findCurrentNote,
          time: getDisplayDate(findCurrentNote.time),
        };
        setNoteValue(noteValue);
      }
    }
  };

  const { isLoading } = useApi<ResponsePropsType>({
    api: 'date/note',
    method: 'GET',
    queryKey: ['NoteList'],
    onSuccess: successHandler,
  });

  const onChangeHandler: OnchangeHandlerType = (v, name) => {
    setNoteValue({ ...noteValue, [name]: v });
  };

  useEffect(() => {
    const selectedDate = calendarInitailSelectedDate;
    setNoteValue({ ...noteValue, time: selectedDate ? getDisplayDate(selectedDate) : '' });
  }, []);

  return { noteValue, isLoading, onChangeHandler };
};

export default useGetData;
