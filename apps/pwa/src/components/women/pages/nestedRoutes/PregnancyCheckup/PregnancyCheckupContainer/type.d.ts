import { ResponsePropsType } from './__hooks__/useGetData/type';

type ItemsTypes = Pick<ResponsePropsType, 'banner'>;

export interface BannerSectionPropsType extends ItemsTypes {}
