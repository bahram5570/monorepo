import { addZero } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SideTypeEnum } from '../../__hooks__/useGetData/enums';
import { ChatContainerMakerProps } from './types';

const ChatContainerMaker = ({ dateTime, children, sideType, width }: ChatContainerMakerProps) => {
  const { colors } = useTheme();

  const isDoctor = sideType === SideTypeEnum.Doctor;

  const date = new Date(dateTime);
  const time = `${date.getHours()}:${addZero(date.getMinutes())}`;

  return (
    <div
      className="flex flex-col items-end gap-2 px-3 py-2 rounded-xl"
      style={{
        width,
        marginLeft: isDoctor ? '0' : 'auto',
        backgroundColor: isDoctor ? colors.Surface_SurfaceVariant : colors.Pink_50,
      }}
    >
      <>{children}</>

      <Typography scale="Lable" size="Small" color="Surface_Outline">
        {time}
      </Typography>
    </div>
  );
};

export default ChatContainerMaker;
