'use client';

import ImpoIcon from '@assets/images/questionsImpo.svg';
import { getUserCookie } from '@utils/cookies';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

const Step1 = () => {
  const { payloadHandler } = usePhaseChangePayload();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = 'completeActionId';

  const selectHandler = () => {
    const { user } = getUserCookie();

    if (user) {
      const installationPurpose = user.installationPurpose;

      if (
        InstallationPurposeEnum.tracker.status === installationPurpose.status &&
        InstallationPurposeEnum.tracker.periodStatus === installationPurpose.periodStatus
      ) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'tracker_step1' });
        payloadHandler({ ...installationPurpose });
      } else if (
        InstallationPurposeEnum.intention.status === installationPurpose.status &&
        InstallationPurposeEnum.intention.periodStatus === installationPurpose.periodStatus
      ) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'intention_step1' });
        payloadHandler({ ...installationPurpose });
      } else if (
        InstallationPurposeEnum.prevention.status === installationPurpose.status &&
        InstallationPurposeEnum.prevention.periodStatus === installationPurpose.periodStatus
      ) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'prevention_step1' });
        payloadHandler({ ...installationPurpose });
      } else if (InstallationPurposeEnum.pregnancy.status === installationPurpose.status) {
        pageNavigationHandler({ id: loadingId, showProgressBar: false, linkTo: 'pregnancy_step1' });
        payloadHandler({ ...installationPurpose });
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-4 py-9">
      <ImpoIcon className="w-20 mt-20" />

      <div className="flex flex-col items-center gap-2 px-5 pt-[100px]">
        <Typography scale="Title" size="Medium" textAlign="center">
          همراه عزیز ایمپو سلام!
        </Typography>

        <Typography scale="Body" size="Large" textAlign="center">
          از اینکه به جمع ایمپویی‌ها پیوستی و برای مراقبت از خودت اپلیکیشن ایمپو رو نصب کردی، خوشحالیم&#128525;
        </Typography>
      </div>

      <Button
        size="large"
        variant="fill"
        color="primary"
        onClick={selectHandler}
        className="mt-auto !w-[204px]"
        isLoading={loadingId === pageNavigationLoading}
      >
        بزن بریم
      </Button>
    </div>
  );
};

export default Step1;
