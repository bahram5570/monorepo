export const CAREER_CONTAINER_MAX_WIDTH = 860;

export enum CareerEmploymentLocationTypeEnum {
  None = 0,
  OnSite = 1,
  Remote = 2,
  Hybrid = 3,
}

export enum CareerDepartmentEnum {
  None = 0,
  Marketing = 1,
  Operation = 2,
  Technical = 3,
  Product = 4,
  Hr = 5,
  Design = 6,
  Financial = 7,
}

export enum CareerLocationEnum {
  None = 0,
  Mashhad = 1,
}

export enum CareerEmploymentTimeTypeEnum {
  None = 0,
  FullTime = 1,
  PartTime = 2,
  Project = 3,
}

export const CAREER_EMPLOYMENT_TIME_TYPE_TITLES: { [key in CareerEmploymentTimeTypeEnum]: string } = {
  [CareerEmploymentTimeTypeEnum.None]: '',
  [CareerEmploymentTimeTypeEnum.FullTime]: 'تمام وقت',
  [CareerEmploymentTimeTypeEnum.PartTime]: 'پاره وقت',
  [CareerEmploymentTimeTypeEnum.Project]: 'پروژه‌ای',
};

export const CAREER_LOCATION_TITLES: { [key in CareerLocationEnum]: string } = {
  [CareerLocationEnum.None]: 'مهم نیست',
  [CareerLocationEnum.Mashhad]: 'مشهد',
};

export const CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES: { [key in CareerEmploymentLocationTypeEnum]: string } = {
  [CareerEmploymentLocationTypeEnum.None]: '',
  [CareerEmploymentLocationTypeEnum.OnSite]: 'حضوری',
  [CareerEmploymentLocationTypeEnum.Remote]: 'دورکاری',
  [CareerEmploymentLocationTypeEnum.Hybrid]: 'هیبرید',
};

export const CAREER_DEPARTMENT_TITLES: { [key in CareerDepartmentEnum]: string } = {
  [CareerDepartmentEnum.None]: '',
  [CareerDepartmentEnum.Marketing]: 'مارکتینگ',
  [CareerDepartmentEnum.Operation]: 'عملیات',
  [CareerDepartmentEnum.Technical]: 'فنی',
  [CareerDepartmentEnum.Product]: 'محصول',
  [CareerDepartmentEnum.Hr]: 'منابع انسانی',
  [CareerDepartmentEnum.Design]: 'طراحی',
  [CareerDepartmentEnum.Financial]: 'مالی',
};
