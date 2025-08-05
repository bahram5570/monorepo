import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import TicketContainerSkeleton from './TicketContainerSkeleton';
import TicketList from './TicketList';
import WebView from './WebView';
import useGetDataCategory from './__hooks__/useGetDataCategory';

const TicketContainer = () => {
  const { data, dataLoading } = useGetDataCategory();
  const { colors } = useTheme();

  return (
    <>
      <WomenPageLayout
        rightElement="BackButton"
        rightElementScript="پشتیبانی"
        backgroundColor={colors.Grey_50}
        leftElement2="ProfileSupportTicket"
        paddingTop={data && data.url ? HEADER_HEIGHT : 0}
      >
        {dataLoading && <TicketContainerSkeleton />}

        {!dataLoading && (
          <>
            {data && data.items.length > 0 && <TicketList {...data} />}
            {data && data.url && <WebView url={data.url} />}
          </>
        )}
      </WomenPageLayout>
    </>
  );
};

export default TicketContainer;
