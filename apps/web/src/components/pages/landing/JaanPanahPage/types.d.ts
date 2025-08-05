import {
  JaanPanahCityConditionEnum,
  JaanPanahGenderEnum,
  JaanPanahHaveChildrenEnum,
  JaanPanahMarriageEnum,
} from './enum';

export type JaanPanahQuestionTypes = {
  gender: { mainTitle: string; type: 'image' } & {
    list: { title: string; value: JaanPanahGenderEnum; image: string }[];
  };
  marriage: { mainTitle: string; type: 'option' } & { list: { title: string; value: JaanPanahMarriageEnum }[] };
  children: { mainTitle: string; type: 'option' } & { list: { title: string; value: JaanPanahHaveChildrenEnum }[] };
  cityCondition: { mainTitle: string; type: 'option' } & {
    list: { title: string; value: JaanPanahCityConditionEnum }[];
  };
};

export type JaanPanahResultTypes = {
  gender: JaanPanahGenderEnum;
  marriage: JaanPanahMarriageEnum;
  children: JaanPanahHaveChildrenEnum;
  cityCondition: JaanPanahCityConditionEnum;
};
