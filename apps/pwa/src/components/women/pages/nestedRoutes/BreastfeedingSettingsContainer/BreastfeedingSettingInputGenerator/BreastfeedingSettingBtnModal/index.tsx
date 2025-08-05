'use client';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useDateScript from './__hooks__/useDateScript';
import { BreastfeedingSettingBtnModalPropsType } from './type';

const BreastfeedingSettingBtnModal = ({ name, value }: BreastfeedingSettingBtnModalPropsType) => {
  const dateScript = useDateScript(value.toString());
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const clickHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', ['name']: name });
    pageNavigationHandler({ showProgressBar: false, id: name });
  };

  const isLoading = pageNavigationLoading === name;

  return (
    <>
      <div className="w-full flex justify-end items-center" onClick={clickHandler}>
        {isLoading && <Spinner color="primary" width={24} />}

        {!isLoading && (
          <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
            {dateScript}
          </Typography>
        )}
      </div>
    </>
  );
};

export default BreastfeedingSettingBtnModal;
