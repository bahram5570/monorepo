import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { PredictFooterProps } from './types';

const PredictFooter = ({ btn, script, isPregnancy, openDatesHandler }: PredictFooterProps) => {
  const { colors } = useTheme();

  return (
    <div
      className={`pt-4 rounded-b-2xl overflow-hidden ${isPregnancy ? '-translate-y-2' : '-translate-y-4'}`}
      style={{ backgroundColor: colors.Neutral_Background.toLowerCase() + 'b3' }}
    >
      <div
        className="w-full flex justify-between items-center gap-3 p-3"
        style={{ backgroundColor: colors.PrimaryWoman_Primary }}
      >
        <Button
          size="medium"
          variant="fill"
          fullWidth={false}
          color="FREE-STYLES"
          onClick={openDatesHandler}
          buttonColor={colors.White}
          className="!min-w-fit px-2 py-3"
          navigationLoadingId="PredictFooter"
          contentsColor={colors.PrimaryWoman_Primary}
        >
          {btn}
        </Button>

        <Typography scale="Lable" size="Medium" color="Neutral_Background">
          {script}
        </Typography>
      </div>
    </div>
  );
};

export default PredictFooter;
