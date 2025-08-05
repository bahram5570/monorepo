import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ClinicTicketGenerator from '../../ClinicTicketGenerator';
import { ACTIVE_TICKETS_LIST_QUERY_NAME } from './constants';
import { ActiveTicketsHeadingProps } from './types';

const ActiveTicketsHeading = ({ activeTicketsOneTitle, activeTicketsMore, tickets }: ActiveTicketsHeadingProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const openHandler = () => {
    newQueryParamsHandler({ [ACTIVE_TICKETS_LIST_QUERY_NAME]: 'true' });
  };

  const isMoreThanOne = tickets.length > 1;
  const hasTicket = tickets.length > 0;
  const firstTicket = tickets[0];

  return (
    <>
      {hasTicket && (
        <div className="w-full flex flex-col items-end gap-2 pb-7">
          <div className="w-full flex flex-row-reverse items-center justify-between">
            <Typography scale="Lable" size="Large">
              {activeTicketsOneTitle}
            </Typography>

            {isMoreThanOne && (
              <Button
                color="pink"
                size="small"
                variant="fill"
                fullWidth={false}
                onClick={openHandler}
                navigationLoadingId="ActiveTicketsHeading"
              >
                {activeTicketsMore}
              </Button>
            )}
          </div>

          <ClinicTicketGenerator
            stylingTypes="heading"
            rate={firstTicket.rate}
            text={firstTicket.text}
            state={firstTicket.state}
            drName={firstTicket.drName}
            drImage={firstTicket.drImage}
            ticketId={firstTicket.ticketId}
            fileName={firstTicket.fileName}
            ticketType={firstTicket.ticketType}
            createTime={firstTicket.createTime}
            drSpeciality={firstTicket.drSpeciality}
          />
        </div>
      )}
    </>
  );
};

export default ActiveTicketsHeading;
