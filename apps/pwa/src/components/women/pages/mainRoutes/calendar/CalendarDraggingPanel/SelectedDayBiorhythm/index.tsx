import InfoIcon from '@assets/icons/info.svg';
import { externalLink } from '@utils/navigation';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CalendarWidgetEnums } from '../../__hooks__/useCalendarGetData/CalendarEnums';
import BiorhythmContainer from './BiorhythmContainer';
import BiorhythmModal from './BiorhythmModal';
import { BIORHYTHM_STATUS, EXTRA_LINK } from './constant';
import { SelectedDayBiorhythmProps } from './type';

const SelectedDayBiorhythm = ({ selectedDateInfo }: SelectedDayBiorhythmProps) => {
  const { colors } = useTheme();

  const backgroundColor = colors.Neutral_Background.toLowerCase() + 'b3';
  const biorhythmInfo = selectedDateInfo.items.find((item) => item.type === CalendarWidgetEnums.Biorythem);

  if (!biorhythmInfo) {
    return <></>;
  }

  return (
    <>
      {biorhythmInfo && (
        <div className="w-full h-fit rounded-2xl p-4" style={{ backgroundColor }}>
          <div
            className="flex justify-between items-center border-b-[1px] pb-2 mb-2"
            style={{ borderColor: colors.Neutral_Surface }}
          >
            <div className="flex flex-col justify-end items-end w-full">
              <Typography scale="Title" size="Small" color="Neutral_OnBackground">
                بیوریتم امروز
              </Typography>
              <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
                با کلیک روی هر کدوم از حالات، هینت مورد نظرت رو بگیر
              </Typography>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            {BIORHYTHM_STATUS.map((bio, index) => {
              const biorhythmPercent = biorhythmInfo.data.bio[bio.type];
              return <BiorhythmContainer {...bio} percent={biorhythmPercent} key={index} />;
            })}
          </div>

          <div className="flex flex-row-reverse justify-center items-center gap-1 mt-3">
            <InfoIcon className="w-[17px] h-auto" style={{ stroke: colors.PrimaryWoman_Primary }} />
            <Typography scale="Body" size="Medium">
              درباره بیوریتم سوال داری؟
            </Typography>
            <div onClick={() => externalLink(EXTRA_LINK, true)}>
              <Typography scale="Lable" size="Medium" color="PrimaryWoman_Primary">
                جوابش رو اینجا ببین
              </Typography>
            </div>
          </div>
          <BiorhythmModal biorhythmInfo={biorhythmInfo} />
        </div>
      )}
    </>
  );
};

export default SelectedDayBiorhythm;
