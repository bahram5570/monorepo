import { ChangeHandlerType, UserInfoInputGeneratorListType, ValueNamesType } from '../type';

type UserInfoBtnPropsType = {
  name: ValueNamesType;
  value: string | number;
};

type UserInfoInputGeneratorPropsType = UserInfoInputGeneratorListType & {
  value: string | number;
  isLastItem: number;
  index: number;
  changeValueHandler: ChangeHandlerType;
};
