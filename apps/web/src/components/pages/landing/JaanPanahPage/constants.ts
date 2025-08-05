import {
  JaanPanahCityConditionEnum,
  JaanPanahGenderEnum,
  JaanPanahHaveChildrenEnum,
  JaanPanahMarriageEnum,
} from './enum';
import { JaanPanahQuestionTypes } from './types';

export const JAAN_PANAH_QUESTIONS_LIST: JaanPanahQuestionTypes = {
  gender: {
    type: 'image',
    mainTitle: 'جنسیتتون رو مشخص کنید؟',
    list: [
      { image: '/assets/images/jaanPanah/man.png', title: 'آقا', value: JaanPanahGenderEnum.Male },
      { image: '/assets/images/jaanPanah/woman.png', title: 'خانم', value: JaanPanahGenderEnum.Female },
    ],
  },
  marriage: {
    type: 'option',
    mainTitle: 'وضعیت تاهل رو مشخص کنید؟',
    list: [
      { title: 'مجرد', value: JaanPanahMarriageEnum.Single },
      { title: 'متاهل', value: JaanPanahMarriageEnum.Married },
    ],
  },
  children: {
    type: 'option',
    mainTitle: 'آیا فرزند دارید؟',
    list: [
      { title: 'بله', value: JaanPanahHaveChildrenEnum.Yes },
      { title: 'خیر', value: JaanPanahHaveChildrenEnum.No },
    ],
  },
  cityCondition: {
    type: 'option',
    mainTitle: 'وضعیت شهر خود را مشخص کنید؟',
    list: [
      { title: 'بمب بارونه', value: JaanPanahCityConditionEnum.Danger },
      { title: 'خبری نیست', value: JaanPanahCityConditionEnum.Normal },
    ],
  },
};
