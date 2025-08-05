import CalendarArrow from '@assets/icons/calendarArrow.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { SupportLinkGeneratorType } from '../type';
import useGetDataSupport from './__hooks__/useGetDataSupport';

const SupportLinkGenerator = (props: SupportLinkGeneratorType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { supportPhone } = useGetDataSupport();

  return (
    <>
      {props.typeLink === 'external' && (
        <a
          className=" p-4 bg-white rounded-lg h-24"
          href={`tel:${supportPhone}`}
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
        >
          <div className="flex flex-col items-end gap-2">
            <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
              {props.title}
            </Typography>

            <div className="flex flex-row-reverse items-center justify-between w-full">
              <Typography scale="Body" size="Medium" color="Surface_Outline">
                {props.discription}
              </Typography>
              <CalendarArrow style={{ stroke: colors.Surface_Outline }} className="w-4 h-4" />
            </div>
          </div>
        </a>
      )}
      {props.typeLink === 'internal' && (
        <Link
          href={props.link}
          className=" p-4 bg-white rounded-lg h-24"
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
        >
          <div className="flex flex-col items-end gap-2">
            <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
              {props.title}
            </Typography>

            <div className="flex flex-row-reverse items-center justify-between">
              <Typography scale="Body" size="Medium" color="Surface_Outline">
                {props.discription}
              </Typography>
              <CalendarArrow style={{ stroke: colors.Surface_Outline }} className="w-4 h-4" />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default SupportLinkGenerator;
