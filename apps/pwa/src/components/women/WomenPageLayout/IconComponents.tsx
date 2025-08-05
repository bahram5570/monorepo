import ArrowIcon from '@assets/icons/arrow.svg';
import TicketsHistoryIcon from '@assets/icons/chats.svg';
import CalendarIcon from '@assets/icons/headerCalendar.svg';
import ProfileIcon from '@assets/icons/headerProfile.svg';
import HistoryIcon from '@assets/icons/history.svg';
import InfoIcon from '@assets/icons/infoIcon.svg';

import Spinner from '@components/ui/Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { ICONS_SIZE } from './constants';
import { IconComponentMakerProps } from './types';

export const BackButtonIconComponent = () => {
  const { colors } = useTheme();

  return (
    <IconComponentMaker
      iconElement={<ArrowIcon className="w-6 h-full stroke-2" style={{ stroke: colors.Surface_Outline }} />}
      path="BACK"
      loadingId="back"
    />
  );
};

export const PregnancyCheckupBackButtonIconComponent = () => {
  const { colors } = useTheme();

  return (
    <IconComponentMaker
      iconElement={<ArrowIcon className="w-6 h-full stroke-2" style={{ stroke: colors.Surface_Outline }} />}
      path="/"
      loadingId="back"
    />
  );
};

export const BackToSubscriptionIconComponent = () => {
  const { colors } = useTheme();

  return (
    <IconComponentMaker
      iconElement={<ArrowIcon className="w-6 h-full stroke-2" style={{ stroke: colors.Surface_Outline }} />}
      path="/protected/subscription"
      loadingId="backToSubscription"
    />
  );
};

export const PrifileIconComponent = () => {
  const { colors } = useTheme();

  return (
    <IconComponentMaker
      iconElement={<ProfileIcon className="w-8 h-full" style={{ stroke: colors.Surface_Outline }} />}
      path="/protected/profile"
      loadingId="profile"
    />
  );
};

export const CalendarIconComponent = () => {
  return (
    <IconComponentMaker
      iconElement={<CalendarIcon className="w-8 h-full" />}
      path="/protected/calendar"
      loadingId="calendar"
    />
  );
};

export const TicketsHistoryIconComponent = () => {
  const { colors } = useTheme();

  return (
    <IconComponentMaker
      iconElement={<TicketsHistoryIcon className="w-8 h-full" style={{ fill: colors.Surface_Outline }} />}
      path="/protected/clinic/ticketsHistory"
      loadingId="history"
    />
  );
};

export const ProfileTicketsHistory = () => {
  const { colors } = useTheme();
  return (
    <div
      className="flex justify-center items-center w-12 h-12 rounded-full"
      style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <IconComponentMaker
        path="/protected/supportTicketHistory"
        loadingId="profileTicketHistory"
        iconElement={<HistoryIcon className="w-6" />}
      />
    </div>
  );
};

export const InfoIconComponent = () => {
  const { colors } = useTheme();

  return (
    <Link href="https://impo.app/" target="_blank">
      <InfoIcon className="w-7 h-full" style={{ fill: colors.Surface_Outline }} />
    </Link>
  );
};

const IconComponentMaker: IconComponentMakerProps = ({ iconElement, path, loadingId }) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const id = `IconComponentMaker_${loadingId}`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      if (path === 'BACK') {
        pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
      } else {
        pageNavigationHandler({ showProgressBar: false, linkTo: path, id });
      }
    }
  };

  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      style={{ width: ICONS_SIZE, height: ICONS_SIZE }}
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && <Spinner color="outline" width={28} />}
      {pageNavigationLoading !== id && iconElement}
    </div>
  );
};
