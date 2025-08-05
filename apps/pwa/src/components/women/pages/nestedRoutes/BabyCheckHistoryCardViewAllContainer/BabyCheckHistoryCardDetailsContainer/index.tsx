'use client';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';

import useGetData from '../__hooks__/useGetData';
import TestGenerator from './TestGenerator/TestGenerator';
import { BabyCheckHistoryCardDetailsContainerProps } from './types';

const BabyCheckHistoryCardDetailsContainer = ({ detailsIndex }: BabyCheckHistoryCardDetailsContainerProps) => {
  const { data } = useGetData();

  const detailsList = data?.items[detailsIndex].details || [];

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <>
        {data && (
          <div className="w-full flex flex-col items-center px-4">
            <CustomImage src={data.icon} width={88} height={88} />

            <Typography
              scale="Body"
              size="Medium"
              textAlign="center"
              className="pt-3 pb-4 px-5"
              color="Neutral_OnBackground"
            >
              اینجا جزئیات تست‍هایی که توی این چرخه انجام دادی رو بهت نشون میدیم
            </Typography>

            <div className="w-full flex flex-col items-center gap-2">
              {detailsList.map((item, index) => (
                <TestGenerator type={item.type} createTime={item.createTime} result={item.result} key={index} />
              ))}
            </div>
          </div>
        )}
      </>
    </WomenPageLayout>
  );
};

export default BabyCheckHistoryCardDetailsContainer;
