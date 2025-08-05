import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { WidgetHintCardLinkToProps } from './types';

const WidgetHintCardLinkTo = ({ internalLink, externalLink }: WidgetHintCardLinkToProps) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();

  const hasInternalLink = typeof internalLink === 'string' && internalLink.length > 0;
  const hasExternalLink = typeof externalLink === 'string' && externalLink.length > 0;
  const hasLink = hasExternalLink || hasInternalLink;

  const linkToHandler = () => {
    const action: ActionTypes = {
      api: '',
      internal: '',
      actionTypes: [],
      actionType: ActionTypeEnum.None,
      nextStep: { type: 0, isDismissible: false, delaySecond: 0, data: null },
    };

    if (hasInternalLink) {
      action.actionType = ActionTypeEnum.InternalRout;
      action.internal = internalLink;
    } else if (hasExternalLink) {
      action.actionType = ActionTypeEnum.ExternalRout;
      action.api = externalLink;
    }

    actionHandler(action);
  };

  return (
    <>
      {hasLink && (
        <div
          onClick={linkToHandler}
          style={{ borderColor: colors.Surface_OutlineVariant }}
          className="w-[110px] h-[32px] rounded-full border-[1px] flex items-center justify-center cursor-pointer"
        >
          <Typography scale="Lable" size="Medium" color="Neutral_OnSurface">
            باز کردن لینک
          </Typography>
        </div>
      )}
    </>
  );
};

export default WidgetHintCardLinkTo;
