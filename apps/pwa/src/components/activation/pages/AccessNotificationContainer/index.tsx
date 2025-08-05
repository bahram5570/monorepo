import { colorFormatConverter } from '@utils/scripts';

import AccessNotificationBtn from './AccessNotificationBtn';
import AccessNotificationHeadingImage from './AccessNotificationHeadingImage';
import AccessNotificationScripts from './AccessNotificationScripts';
import { AccessNotificationContainerProps } from './types';

const AccessNotificationContainer = (props: AccessNotificationContainerProps) => {
  const color1 = colorFormatConverter(props.gradient[1]);
  const color2 = colorFormatConverter(props.gradient[0]);

  return (
    <div
      style={{ backgroundColor: color1 }}
      className="relative overflow-x-hidden min-h-[100dvh] animate-mainActivationModule flex flex-col gap-5"
    >
      <div className="flex flex-col items-center">
        <AccessNotificationHeadingImage image={props.image} backgroundColor={color2} doRepeat={props.doRepeat} />

        <AccessNotificationScripts title={props.title} firstName={props.firstName} description={props.description} />
      </div>

      <AccessNotificationBtn btnLabel={props.btnLabel} onComplete={props.onComplete} />
    </div>
  );
};

export default AccessNotificationContainer;
