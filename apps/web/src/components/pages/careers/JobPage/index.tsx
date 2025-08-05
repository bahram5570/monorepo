import HeaderFooterContainer from '@components/HeaderFooterContainer';

import CareerBreadcrumb from '../CareerBreadcrumb';
import { CareerBreadcrumbListTypes } from '../CareerBreadcrumb/types';
import { CAREER_CONTAINER_MAX_WIDTH, CAREER_DEPARTMENT_TITLES } from '../constants';
import JobCards from './JobCards';
import JobContents from './JobContents';
import JobResumeLink from './JobResumeLink';
import JobTitle from './JobTitle';
import { JobPageTypes } from './types';

const JobPage = (props: JobPageTypes) => {
  const breadScrumbList: CareerBreadcrumbListTypes = [
    { title: 'فرصت‌های شغلی', href: '/careers' },
    { title: CAREER_DEPARTMENT_TITLES[props.departman], href: `/careers/${props.id}` },
  ];

  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col items-center px-4 pt-[100px] md:pt-[150px] pb-16">
        <div className="w-full" style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH }}>
          <CareerBreadcrumb list={breadScrumbList} />

          <div className="w-full py-6 px-3 md:px-6 rounded-2xl shadow-[0_0_16px_#00000011] overflow-hidden">
            <JobTitle title={props.title} id={props.id} />
            <JobCards
              location={props.location}
              departman={props.departman}
              employmentTimeType={props.employmentTimeType}
              employmentLocationType={props.employmentLocationType}
            />
            <JobContents jobDescription={props.jobDescription} />
            <JobResumeLink id={props.id} />
          </div>
        </div>
      </div>
    </HeaderFooterContainer>
  );
};

export default JobPage;
