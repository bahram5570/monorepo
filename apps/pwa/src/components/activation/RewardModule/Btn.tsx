import Button from '@components/ui/Button';

import { BtnProps, RewardBtnTypes } from './types';

const Btn = ({ btnLabel, btnLabel2, btnHandler, isOnMountModule, isLoading }: BtnProps) => {
  const clickHandler: RewardBtnTypes = (v) => {
    btnHandler(v);
  };

  return (
    <div className="w-full flex flex-col mt-auto px-4 pb-9 pt-1">
      <div className="flex mx-auto w-[204px] min-w-fit">
        {btnLabel2 && (
          <Button
            size="medium"
            variant="text"
            color="onBackground"
            navigationLoadingId={'rewardModuleBtn'}
            onClick={() => clickHandler({ isBtn2: true })}
          >
            {btnLabel2}
          </Button>
        )}

        <Button
          size="large"
          variant="fill"
          color="primary"
          isLoading={isLoading}
          onClick={clickHandler}
          navigationLoadingId={isOnMountModule ? undefined : 'rewardModuleBtn'}
        >
          {btnLabel}
        </Button>
      </div>
    </div>
  );
};

export default Btn;
