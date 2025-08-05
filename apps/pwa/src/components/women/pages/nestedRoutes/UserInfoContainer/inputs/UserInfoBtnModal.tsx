'use client';

import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { UserInfoBtnPropsType } from './type';

const UserInfoBtnModal = ({ name, value }: UserInfoBtnPropsType) => {
  const { culture } = useCulture();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const valueScript = useMemo(() => {
    if (name === 'birthDate') {
      switch (culture.calendarType) {
        case CalendarTypeEnum.Gregorian:
          return value.toString().replaceAll('-', '/');
        case CalendarTypeEnum.Jalali:
          return toJalaliData(value.toString());
        default:
          return toJalaliData(value.toString());
      }
    }

    return value;
  }, [culture.calendarType, value]);

  const isLoading = pageNavigationLoading === name;

  return (
    <>
      <div
        className="w-full flex justify-end items-center"
        onClick={() => {
          (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', ['name']: name }),
            pageNavigationHandler({ showProgressBar: false, id: name }));
        }}
      >
        {isLoading && <Spinner color="primary" width={24} />}

        {!isLoading && (
          <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
            {`${valueScript}`}
          </Typography>
        )}
      </div>
    </>
  );
};

export default UserInfoBtnModal;
