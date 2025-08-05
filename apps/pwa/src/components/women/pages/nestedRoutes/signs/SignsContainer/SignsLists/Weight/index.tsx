import CalendarArrow from '@assets/icons/calendarArrow.svg';
import WeightIcon from '@assets/icons/weight.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { WeightPropsType } from './type';

const Weight = ({ weight }: WeightPropsType) => {
  const { colors } = useTheme();

  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'addWeight',
      linkTo: `/protected/addWeight?currentWeight=${weight}`,
    });
  };

  return (
    <div className=" rounded-2xl p-2 flex flex-col" style={{ background: colors.White }}>
      <div className="divide-y-[1px] p-2">
        <div className="w-full flex flex-row-reverse items-center justify-between h-fit  p-2 ">
          <div className="flex flex-col items-end gap-1">
            <Typography scale="Lable" size="Large">
              ویرایش وزن
            </Typography>
            <Typography scale="Body" size="Medium">
              از اینجا میتونی وزنت رو ویرایش کنی
            </Typography>
          </div>

          <div
            className=" w-12 h-12  flex justify-center items-center rounded-full"
            style={{
              backgroundColor: colors.Blue_50,
            }}
          >
            <WeightIcon className="w-6 h-auto" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 p-1">
          <Typography scale="Body" size="Medium">
            وزن
          </Typography>
          <div
            style={{ background: colors.Surface_SurfaceVariant }}
            className="w-full rounded-xl h-10 flex flex-row-reverse justify-between p-3 items-center"
            onClick={linkTo}
          >
            <div className="w-full">
              <Typography scale="Title" size="Medium">
                {`${!weight ? 'kg__' : `${weight}kg`} `}
              </Typography>
            </div>
            <div className="w-full">
              <CalendarArrow
                className="w-[18px] h-auto rotate-[268deg]"
                style={{ stroke: colors.Surface_OutlineVariant }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weight;
