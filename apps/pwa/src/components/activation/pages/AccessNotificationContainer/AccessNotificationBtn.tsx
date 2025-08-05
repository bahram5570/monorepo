// import { notificationPermission } from '@utils/system';
import Button from '@components/ui/Button';

// import { firebaseToken } from '@lib/firebaseConfig';
import { AccessNotificationBtnProps } from './types';

const AccessNotificationBtn = ({ btnLabel, onComplete }: AccessNotificationBtnProps) => {
  // const onCompleteHandler = async () => {
  //   if (onComplete) {
  //     onComplete();
  //   }
  // };

  const clickHandler = () => {
    // notificationPermission(async (status) => {
    //   if (onComplete) {
    //     if (status === 'granted') {
    //       await firebaseToken();
    //     }
    //     await onCompleteHandler();
    //   }
    // });
  };

  return (
    <div className="w-full flex flex-col mt-auto px-4 pb-9 pt-1">
      <div className="flex mx-auto w-[204px] min-w-fit">
        <Button
          size="large"
          variant="fill"
          color="primary"
          onClick={clickHandler}
          navigationLoadingId="AccessNotificationBtn"
        >
          {btnLabel}
        </Button>
      </div>
    </div>
  );
};

export default AccessNotificationBtn;
