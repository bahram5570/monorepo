import CaretLeftIcon from '@assets/icons/CaretLeft.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import ProgressBar from '../../chatContainer/ProgressBar';
import { HistoryItemPropsType } from './type';

const HistoryItem = (props: HistoryItemPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <Link
      href={`/protected/partner/challenge/${props.id}`}
      onClick={() => pageNavigationHandler({ id: 'history', showProgressBar: true })}
    >
      <div
        className="divide-y-[1px] flex flex-col gap-3 p-5 rounded-2xl"
        style={{ border: `1px solid ${colors.Neutral_Surface}` }}
      >
        <div className="flex flex-row-reverse w-full gap-3 justify-between items-center">
          <div className="flex flex-row-reverse gap-2">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex items-center relative w-14">
                <div
                  className={`w-8 h-8 rounded-full border-2  overflow-hidden ml-0 relative `}
                  style={{ backgroundColor: colors.White, borderColor: colors.White }}
                >
                  <CustomImage
                    src={props.womanAvatar}
                    className="w-full h-full !object-cover"
                    style={{ border: `1px solid ${colors.Neutral_Background}` }}
                  />
                </div>
                <div
                  className={`w-8 h-8 rounded-full border-2 border-white overflow-hidden  ml-0 absolute left-5 bg-white`}
                >
                  <CustomImage
                    src={props.manAvatar}
                    className="w-full h-full !object-cover"
                    style={{ border: `1px solid ${colors.Neutral_Background}` }}
                  />
                </div>
              </div>
              <Typography scale="Lable" size="Medium" color="Blue_600" className="w-full" textAlign="center">
                {props.title}
              </Typography>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Typography scale="Body" size="Medium">
                {props.text}
              </Typography>
              <Typography scale="Lable" size="SmallProminet">
                {props.description}
              </Typography>
            </div>
          </div>

          <div
            className="w-10 h-10 flex justify-center items-center rounded-full"
            style={{
              backgroundColor: colors.PrimaryMan_PrimaryContainerMan,
            }}
          >
            <CaretLeftIcon className="w-6 h-6" style={{ stroke: colors.PrimaryMan_PrimaryMan }} />
          </div>
        </div>
        <div>
          <ProgressBar
            avatar={props.womanAvatar}
            partnerAvatar={props.manAvatar}
            progress={props.progress}
            className="mt-6"
          />
        </div>
      </div>
    </Link>
  );
};

export default HistoryItem;
