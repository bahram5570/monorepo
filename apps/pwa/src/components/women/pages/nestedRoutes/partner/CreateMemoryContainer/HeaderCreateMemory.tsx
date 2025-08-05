import { jalaaliScriptDate } from '@utils/dates';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

const HeaderCreateMemory = () => {
  const { colors } = useTheme();

  const gregorianMoment = moment(new Date().toISOString(), 'YYYY-MM-DD');
  const jalaaliDate = gregorianMoment.format('jYYYY/jMM/jDD');

  return (
    <div className="flex items-center justify-center gap-3">
      <div
        style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
        className="h-0 w-24"
      ></div>
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="center">
        {`امروز ${jalaaliScriptDate(jalaaliDate)} `}
      </Typography>
      <div
        style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
        className="h-0 w-24"
      ></div>
    </div>
  );
};

export default HeaderCreateMemory;
