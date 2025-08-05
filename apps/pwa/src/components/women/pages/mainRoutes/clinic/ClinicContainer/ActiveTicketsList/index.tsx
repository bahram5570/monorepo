import { useEffect } from 'react';

import WomenPageLayoutHeader from '@components/women/WomenPageLayout/WomenPageLayoutHeader';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import ClinicTicketGenerator from '../../ClinicTicketGenerator';
import { ACTIVE_TICKETS_LIST_QUERY_NAME } from '../ActiveTicketsHeading/constants';
import ActiveTicketSkeleton from './ActiveTicketSkeleton';
import { ActiveTicketsListProps } from './types';

const ActiveTicketsList = ({ tickets }: ActiveTicketsListProps) => {
  const { colors } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();

  const isActiveTicketsListOpen = getQueryParams(ACTIVE_TICKETS_LIST_QUERY_NAME);

  useOverflowHandler(isActiveTicketsListOpen !== null);

  if (!isActiveTicketsListOpen) {
    return <></>;
  }

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, paddingTop: HEADER_HEIGHT + 16, backgroundColor: colors.White }}
      className="fixed top-0 left-0 right-0 bottom-0 w-full min-h-[100dvh] max-h-[100dvh] overflow-y-auto mx-auto px-4 pb-4 z-40"
    >
      <WomenPageLayoutHeader rightElement="BackButton" rightElementScript="مشاوره های فعال" />

      {!tickets && <ActiveTicketSkeleton />}

      {tickets && (
        <div className="relative flex flex-col gap-3 z-0">
          {tickets.map((ticket, index) => (
            <ClinicTicketGenerator
              key={index}
              rate={ticket.rate}
              text={ticket.text}
              stylingTypes="lists"
              state={ticket.state}
              drName={ticket.drName}
              drImage={ticket.drImage}
              ticketId={ticket.ticketId}
              fileName={ticket.fileName}
              ticketType={ticket.ticketType}
              createTime={ticket.createTime}
              drSpeciality={ticket.drSpeciality}
            />
          ))}
          {tickets.map((ticket, index) => (
            <ClinicTicketGenerator
              key={index}
              rate={ticket.rate}
              text={ticket.text}
              stylingTypes="lists"
              state={ticket.state}
              drName={ticket.drName}
              drImage={ticket.drImage}
              ticketId={ticket.ticketId}
              fileName={ticket.fileName}
              ticketType={ticket.ticketType}
              createTime={ticket.createTime}
              drSpeciality={ticket.drSpeciality}
            />
          ))}
          {tickets.map((ticket, index) => (
            <ClinicTicketGenerator
              key={index}
              rate={ticket.rate}
              text={ticket.text}
              stylingTypes="lists"
              state={ticket.state}
              drName={ticket.drName}
              drImage={ticket.drImage}
              ticketId={ticket.ticketId}
              fileName={ticket.fileName}
              ticketType={ticket.ticketType}
              createTime={ticket.createTime}
              drSpeciality={ticket.drSpeciality}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveTicketsList;
