import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import TicketText from '../SupportTickets/SupportTicketsContainer/TicketText';
import TicketHistorySkeleton from './TicketHistorySkeleton';
import useGetData from './__hooks__/useGetData';

const TicketsHistoryContainer = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetData();

  return (
    <>
      <WomenPageLayout
        rightElement="BackButton"
        rightElementScript="سابقه تیکت ها"
        backgroundColor={colors.Grey_50}
        className="flex flex-col items-end p-3 gap-3"
        paddingBottom={96}
      >
        {isLoading && <TicketHistorySkeleton />}
        {!isLoading && (
          <>
            {!data && <></>}
            {data && (
              <>
                <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
                  تیکت های شما
                </Typography>
                {data.items.map((ticket) => (
                  <TicketText key={ticket.id} {...ticket} />
                ))}
              </>
            )}
          </>
        )}
      </WomenPageLayout>
    </>
  );
};

export default TicketsHistoryContainer;
