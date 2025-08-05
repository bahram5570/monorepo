import {
  CareerDepartmentEnum,
  CareerEmploymentLocationTypeEnum,
  CareerEmploymentTimeTypeEnum,
  CareerLocationEnum,
} from './constants';

export type CareerJobTypes = {
  id: string;
  title: string;
  location: CareerLocationEnum;
  departman: CareerDepartmentEnum;
  employmentTimeType: CareerEmploymentTimeTypeEnum;
  employmentLocationType: CareerEmploymentLocationTypeEnum;
};

export type JobTypes = {
  title: string;
  jobDescription: string;
  location: CareerLocationEnum;
  departman: CareerDepartmentEnum;
  employmentTimeType: CareerEmploymentTimeTypeEnum;
  employmentLocationType: CareerEmploymentLocationTypeEnum;
};
