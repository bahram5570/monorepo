'use client';

import Spinner from '@components/ui/Spinner';

import CareerBreadcrumb from '../../CareerBreadcrumb';
import { CareerBreadcrumbListTypes } from '../../CareerBreadcrumb/types';
import { CAREER_CONTAINER_MAX_WIDTH, CAREER_DEPARTMENT_TITLES } from '../../constants';
import ResumeInputs from '../ResumeInputs';
import ResumeTitle from '../ResumeTitle';
import useGetData from '../__hooks__/useGetData';

const ResumeContainer = () => {
  const { isLoading, jobId, data } = useGetData();

  const title = data ? CAREER_DEPARTMENT_TITLES[data.departman] : '';

  const breadScrumbList: CareerBreadcrumbListTypes =
    jobId === 'null'
      ? [
          { title: 'فرصت‌های شغلی', href: '/careers' },
          { title: 'درخواست همکاری', href: '/careers/null/resume' },
        ]
      : [
          { title: 'فرصت‌های شغلی', href: '/careers' },
          { title, href: `/careers/${jobId}` },
          { title: 'درخواست همکاری', href: '/careers/null/resume' },
        ];

  return (
    <div className="w-full flex flex-col items-center px-4 pt-[100px] md:pt-[150px] pb-16">
      <div className="w-full" style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH }}>
        {isLoading && (
          <div className="w-full flex justify-center">
            <Spinner size={40} />
          </div>
        )}

        {!isLoading && (
          <>
            <CareerBreadcrumb list={breadScrumbList} />

            <div className="w-full py-6 px-3 md:px-6 rounded-2xl shadow-[0_0_16px_#00000011] overflow-hidden">
              <ResumeTitle />
              <ResumeInputs jobId={jobId} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeContainer;
