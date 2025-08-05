import ChangeArrowsIcon from '@assets/icons/changeArrows.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { SPECIALISTS_LIST_QUERY_NAME } from '../constants';
import { ActiveSpecialistProps } from './types';

const ActiveSpecialist = ({ isMoreThanOne }: ActiveSpecialistProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { colors } = useTheme();

  const openSpecialistsHandler = () => {
    newQueryParamsHandler({ [SPECIALISTS_LIST_QUERY_NAME]: 'true' });
  };

  return (
    <>
      <div className="relative z-0 w-full flex flex-row-reverse justify-between">
        <Typography scale="Title" size="Small">
          متخصص فعال
        </Typography>

        {isMoreThanOne && (
          <Button
            size="small"
            variant="fill"
            color="surface"
            fullWidth={false}
            onClick={openSpecialistsHandler}
            navigationLoadingId="ActiveSpecialist"
          >
            <div className="flex items-center gap-1">
              <div>تغییر متخصص</div>
              <ChangeArrowsIcon className="w-4 h-auto" style={{ fill: colors.PrimaryWoman_Primary }} />
            </div>
          </Button>
        )}
      </div>
    </>
  );
};

export default ActiveSpecialist;
