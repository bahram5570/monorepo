'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import BloodSugerListContainer from '@components/women/pages/nestedRoutes/signs/SignsContainer/SignsLists/BloodSugerListContainer';

import ListSkeleton from '../bloodPressureList/ListSkeleton';
import useGetData from './__hooks__/useGetData';

const BloodSugerList = () => {
  const { initailBloodSugerList, isLoading } = useGetData();

  return (
    <>
      {isLoading && <ListSkeleton />}
      {!isLoading && (
        <WomenPageLayout rightElement="BackButton" rightElementScript="تست دیابت بارداری">
          <BloodSugerListContainer bloodSugerList={initailBloodSugerList} />
        </WomenPageLayout>
      )}
    </>
  );
};

export default BloodSugerList;
