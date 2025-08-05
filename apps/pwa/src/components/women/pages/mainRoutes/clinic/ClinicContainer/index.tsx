import { Suspense, useState } from 'react';

import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import WomenPageLayout from '@components/women/WomenPageLayout';

import ActiveTicketsHeading from './ActiveTicketsHeading';
import ActiveTicketsList from './ActiveTicketsList';
import ClinicCardGenerator from './ClinicCardGenerator';
import ClinicChatbotTemporaryButton from './ClinicChatbotTemporaryButton';
import ClinicSkeleton from './ClinicSkeleton';
import useGetConfigAi from './__hooks__/useGetConfigAi';
import useGetData from './__hooks__/useGetData';

const ClinicContainer = () => {
  const { isLoading, data } = useGetData();
  const { aiConfigLoading, aiConfigData } = useGetConfigAi();
  const [paddingBottomValue, setPaddingBottomValue] = useState<number>(0);

  const showLoading = aiConfigLoading || isLoading;

  const onChangeValueHandler = (value: number) => {
    setPaddingBottomValue(value);
  };

  return (
    <>
      <Suspense>
        <WomenPageLayout
          rightElement="Info"
          leftElement1="Profile"
          leftElement2="TicketsHistory"
          paddingBottom={FOOTER_HEIGTH + 16}
        >
          <div
            className="relative flex flex-col items-center gap-4 px-6 z-0"
            style={{ paddingBottom: paddingBottomValue }}
          >
            {showLoading && <ClinicSkeleton />}

            {!showLoading && (
              <>
                {data && (
                  <>
                    <ActiveTicketsHeading
                      tickets={data.tickets}
                      activeTicketsMore={data.activeTicketsMore}
                      activeTicketsOneTitle={data.activeTicketsOneTitle}
                    />

                    <Typography scale="Headline" size="Small">
                      {data.title}
                    </Typography>

                    {data.types.map((item, index) => (
                      <ClinicCardGenerator
                        key={index}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        priceUnit={item.priceUnit}
                        description={item.description}
                      />
                    ))}
                  </>
                )}

                {aiConfigData && aiConfigData.isAvailable && (
                  <ClinicChatbotTemporaryButton chatbot={aiConfigData} onChangeValueHandler={onChangeValueHandler} />
                )}
              </>
            )}
          </div>
        </WomenPageLayout>

        <ActiveTicketsList tickets={data?.tickets} />
      </Suspense>
    </>
  );
};

export default ClinicContainer;
