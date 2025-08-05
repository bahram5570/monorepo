import HamdelIcon from '@assets/icons/hamdel.svg';
import { jalaaliScriptDate } from '@utils/dates';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

import { PartnerAvatarPropsType } from './type';

const PartnerAvatar = ({ name, profileUrl, jointime }: PartnerAvatarPropsType) => {
  const { colors } = useTheme();
  const gregorianMoment = moment(jointime, 'YYYY-MM-DD');
  const jalaaliDate = gregorianMoment.format('jYYYY/jMM/jDD');

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <CustomImage src={profileUrl} width={96} height={96} className="rounded-full" />
      <div className="flex flex-col items-center gap-1">
        <Typography scale="Title" size="Small">
          {name}
        </Typography>
        <div className="flex items-center gap-1">
          <Typography scale="Body" size="Medium" color="PrimaryWoman_Primary">
            {jalaaliScriptDate(jalaaliDate)}
          </Typography>
          <HamdelIcon className="w-4 h-4" style={{ stroke: colors.PrimaryWoman_Primary }} />
        </div>
      </div>
    </div>
  );
};

export default PartnerAvatar;
