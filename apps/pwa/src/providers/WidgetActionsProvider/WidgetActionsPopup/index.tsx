import CustomModal from '@components/ui/CustomModal';

import { PopupTypeEnum } from '../widgetEnums';
import PopUpEditCycle from './PopUpEditCycle';
import PopupDialog from './PopupModals/PopupDialog';
import PopupImageTextButton from './PopupModals/PopupImageTextButton';
import PopupInteraction from './PopupModals/PopupInteraction';
import PopupInteractionReward from './PopupModals/PopupInteractionReward';
import PopupMultiOption from './PopupModals/PopupMultiOption';
import PopupSexTracker from './PopupModals/PopupSexTracker';
import usePopupModal from './__hooks__/usePopupModal';
import useTwoStepsStatus from './__hooks__/useTwoStepsStatus';
import { WidgetActionsPopupProps } from './types';

const WidgetActionsPopup = ({ popUp }: WidgetActionsPopupProps) => {
  const { isPopupModalOpen } = usePopupModal(popUp !== null);
  const { hasTwoStepsInteractionReward } = useTwoStepsStatus(popUp);

  const isFullScreenList = [
    PopupTypeEnum.EditCycle,
    PopupTypeEnum.SexTracker,
    PopupTypeEnum.ImageTextButton,
    PopupTypeEnum.InteractionReward,
  ];
  const isFullScreen = isFullScreenList.includes(popUp?.type || 0);
  const isSlidingMode = !isFullScreen;

  return (
    <>
      <CustomModal
        isOpen={isPopupModalOpen}
        isFullScreen={isFullScreen}
        isSlidingMode={isSlidingMode}
        className={`${isFullScreen && '!p-0'}`}
      >
        <>
          {popUp && (
            <>
              {popUp.type === PopupTypeEnum.MultiOption && <PopupMultiOption data={popUp.data} />}
              {popUp.type === PopupTypeEnum.Interaction && <PopupInteraction data={popUp.data} />}
              {popUp.type === PopupTypeEnum.Dialog && <PopupDialog data={popUp.data} />}
              {popUp.type === PopupTypeEnum.EditCycle && <PopUpEditCycle popUp={popUp} />}
              {popUp.type === PopupTypeEnum.InteractionReward && (
                <PopupInteractionReward data={popUp.data} hasTwoStepsInteractionReward={hasTwoStepsInteractionReward} />
              )}
              {popUp.type === PopupTypeEnum.SexTracker && <PopupSexTracker data={popUp.data} />}
              {popUp.type === PopupTypeEnum.ImageTextButton && <PopupImageTextButton data={popUp.data} />}
            </>
          )}
        </>
      </CustomModal>
    </>
  );
};

export default WidgetActionsPopup;
