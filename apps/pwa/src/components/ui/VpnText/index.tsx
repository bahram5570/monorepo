import useTheme from '@hooks/useTheme';

import Typography from '../Typography';

const VpnText = () => {
  const { colors } = useTheme();
  
  return (
    <div className="flex flex-row-reverse items-center justify-start gap-1 ">
      <div
        style={{ backgroundColor: colors.Surface_InverseSurface }}
        className="flex justify-center items-center h-3 p-2 rounded"
      >
        <Typography scale="Lable" size="Small" color="Neutral_Background">
          VPN
        </Typography>
      </div>
      <Typography scale="Body" size="Small" color="Neutral_OnBackground">
        جهت ورود به درگاه بانک، لازم است فیلترشکن خاموش باشد.
      </Typography>
    </div>
  );
};

export default VpnText;
