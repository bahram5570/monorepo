import InfoIcon from '@assets/icons/info.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const Warning = () => {
  const { colors } = useTheme();
  return (
    <div
      className="rounded-lg flex flex-row p-3 items-center  m-4"
      style={{
        border: `1px solid ${colors.Warning_Warning}`,
        backgroundColor: 'rgba(255, 237, 213,0.5)',
      }}
    >
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
        تا زمانی که همدلت پیامت رو نخونه امکان ارسال پیام جدید نیست
      </Typography>
      <div
        className="w-11 rotate-90 h-0 border"
        style={{
          borderColor: colors.Green_100,
        }}
      ></div>
      <InfoIcon className="w-6 h-6" style={{ stroke: colors.Warning_Warning }} />
    </div>
  );
};

export default Warning;
