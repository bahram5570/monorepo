import { useState } from 'react';

import CopyIcon from '@assets/icons/Copy.svg';
import Refresh from '@assets/icons/refresh.svg';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useCopy from '../__hooks__/useCopy';
import { PartnerCodePropsType } from './type';

const PartnerCode = ({ isLoading, refreshLoading, onRefreshCodeHandler, partnerCode }: PartnerCodePropsType) => {
  const { copyToClipboard } = useCopy();
  const loading = isLoading || refreshLoading;
  const { colors } = useTheme();

  return (
    <div className="w-full">
      <div style={{ border: `1px dashed` }} className="flex w-full justify-between p-1 items-center rounded-xl gap-2">
        <div onClick={onRefreshCodeHandler}>
          <Refresh className="w-8 h-8" />
        </div>
        <div className="w-full flex justify-center items-center">
          {loading && (
            <div className="flex w-20 justify-center items-center">
              <Spinner color="primary" width={30} />
            </div>
          )}
          {!isLoading && partnerCode && (
            <Typography scale="Title" size="Small" color="Surface_OnSurfaceVariant" className="px-2">
              {partnerCode}
            </Typography>
          )}
        </div>
        {partnerCode && (
          <div onClick={() => partnerCode && copyToClipboard(partnerCode)}>
            <CopyIcon className="w-8 scale-100 h-8" style={{ stroke: colors.Surface_Outline }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerCode;
