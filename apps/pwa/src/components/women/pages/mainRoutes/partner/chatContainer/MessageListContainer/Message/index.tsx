import TickIcon from '@assets/icons/tick.svg';
import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SideEnum } from './constants';
import { MessagePropsType } from './type';

const Message = ({ createTime, side, text, partnerAvatar, id }: MessagePropsType) => {
  const { colors } = useTheme();
  const date = createTime ? new Date(createTime) : new Date();
  const currentDate = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className={`flex flex-col gap-4  ${side === SideEnum.Partner ? 'items-start ml-4' : 'items-end mr-4'}`}>
      <div className="flex gap-1">
        {side === SideEnum.Partner && (
          <div className="flex items-end">
            <CustomImage src={partnerAvatar} width={32} height={30} className="rounded-full !object-cover" />
          </div>
        )}
        <div
          style={{
            background: `${side === SideEnum.Self ? 'linear-gradient(110.42deg, #FFCEDD 3.32%, #F24F7A 99.1%)' : colors.Surface_SurfaceVariant}`,
            border: `${side === SideEnum.Partner ? `1px solid ${colors.Surface_SurfaceVariant}` : ''}`,
          }}
          className={`max-w-[250px] h-auto rounded-2xl ${side === SideEnum.Partner ? ' mb-4' : 'mb-2'}`}
        >
          <div className="flex flex-col gap-1 p-2">
            <Typography
              scale="Body"
              size="Small"
              color={`${side === SideEnum.Partner ? 'Neutral_OnBackground' : 'White'}`}
              textAlign="justify"
            >
              {text}
            </Typography>

            <div className="flex items-center w-full justify-end gap-1">
              <Typography
                scale="Lable"
                size="Small"
                color={`${side === SideEnum.Partner ? 'Neutral_OnBackground' : 'White'}`}
              >
                {toPersianNumbers(currentDate)}
              </Typography>
              {id === '' ? (
                <Spinner color="surface" width={16} />
              ) : (
                <TickIcon
                  className="w-4 h-4"
                  style={{ stroke: `${side === SideEnum.Partner ? colors.Neutral_OnBackground : colors.White}` }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
