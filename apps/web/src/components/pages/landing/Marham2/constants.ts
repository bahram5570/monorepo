import { MarhaamFeelingEnum } from './enum';
import { MarhaamQuestionTypes } from './types';

export const MARHAAM_QUESTIONS_LIST: MarhaamQuestionTypes = {
  feeling: {
    type: 'option',
    mainTitle: 'انتخاب کن ببین الان کدوم حس بهت نزدیک‌تره',
    list: [
      {
        title: 'بی‌حسی روانی',
        value: MarhaamFeelingEnum.PsychologicalAnesthesia,
        description: 'بی‌حسی روانی حالتی‌ست که فرد در اون احساساتش رو به‌درستی تجربه نمی‌کنه یا نمی‌تونه ابراز کنه',
      },
      {
        title: 'استرس و اضطراب',
        value: MarhaamFeelingEnum.Anxiety,
        description:
          'استرس و اضطراب جنگی، نوعی حالت مداومِ ترس، بی‌قراری و آماده‌باش ذهنی‌ست که حتی بعد از پایان خطر هم ادامه پیدا می‌کنه.',
      },
      {
        title: 'افسردگی ناشی از جنگ',
        value: MarhaamFeelingEnum.Depression,
        description:
          'افسردگی ناشی از جنگ، یک واکنش روانی عمیق به تجربه‌های تلخ و بحران‌هاست. فرد بعد از پایان جنگ همچنان دچار غم و ناامیدیه.',
      },
      {
        title: 'افزایش پرخاشگری',
        value: MarhaamFeelingEnum.Aggression,
        description:
          'پرخاشگری ناشی از جنگ، واکنش روانی و رفتاری افرادی‌ست که در نتیجه‌ی تجربه‌های سخت و پرفشار جنگ، دچار خشم‌ کنترل‌نشده و رفتارهای خشونت‌آمیز می‌شن.',
      },
      {
        title: 'عدم اعتماد و امید',
        value: MarhaamFeelingEnum.Disappointed,
        description:
          'وضعیتی روانی که در اون فرد یا جامعه پس از تجربه‌ خشونت و جنگ، نسبت به دیگران و آینده احساس ناامنی و بدبینی پیدا می‌کنه.',
      },
    ],
  },
};
