import WomenPageLayout from '@components/women/WomenPageLayout';

import ClinicTicketGenerator from '../ClinicTicketGenerator';
import ClinicTicketsHistorySkeleton from './ClinicTicketsHistorySkeleton';
import EmptyList from './EmtpyList';
import useGetData from './__hooks__/useGetData';

const ClinicTicketHistoryContainer = () => {
  const { isLoading, data } = useGetData();

  const isEmptyList = data?.tickets.length === 0;

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="تاریخچه مشاوره ها" className="px-4 !pb-10">
      <>
        {isLoading && <ClinicTicketsHistorySkeleton />}

        {!isLoading && data && (
          <>
            <div className="relative flex flex-col gap-3 z-0">
              {isEmptyList && <EmptyList />}

              {!isEmptyList && (
                <>
                  {data.tickets.map((ticket, index) => (
                    <ClinicTicketGenerator
                      drSpeciality={ticket.drSpeciality}
                      createTime={ticket.createTime}
                      ticketId={ticket.ticketId}
                      drImage={ticket.drImage}
                      drName={ticket.drName}
                      stylingTypes="lists"
                      state={ticket.state}
                      text={ticket.text}
                      rate={ticket.rate}
                      ticketType={-1} // # Fake data
                      fileName={''} // # Fake data
                      key={index}
                    />
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </>
    </WomenPageLayout>
  );
};

export default ClinicTicketHistoryContainer;
