import OffCommentsIcom from '@assets/icons/careers/off-comments.svg';
import OffCooperationIcom from '@assets/icons/careers/off-cooperation.svg';
import OffLampIcom from '@assets/icons/careers/off-lamp.svg';
import OffResumeIcom from '@assets/icons/careers/off-resume.svg';
import OffStatisticsIcom from '@assets/icons/careers/off-statics.svg';
import OnCommentsIcom from '@assets/icons/careers/on-comments.svg';
import OnCooperationIcom from '@assets/icons/careers/on-cooperation.svg';
import OnLampIcom from '@assets/icons/careers/on-lamp.svg';
import OnResumeIcom from '@assets/icons/careers/on-resume.svg';
import OnStatisticsIcom from '@assets/icons/careers/on-statics.svg';

import { HiringItemsListTypes } from './types';

export const HIRING_ITEMS_LIST: HiringItemsListTypes = [
  { title: 'دریافت رزومه', OnIcon: OnResumeIcom, OffIcon: OffResumeIcom },
  { title: 'بررسی رزومه', OnIcon: OnLampIcom, OffIcon: OffLampIcom },
  { title: 'ارزیابی‌های تخصصی و رفتاری', OnIcon: OnStatisticsIcom, OffIcon: OffStatisticsIcom },
  { title: 'تصمیم‌گیری و ارائه پیشنهاد شغلی', OnIcon: OnCommentsIcom, OffIcon: OffCommentsIcom },
  { title: 'شروع همکاری', OnIcon: OnCooperationIcom, OffIcon: OffCooperationIcom },
];
