import FooterCalendarIcon from '@assets/icons/footerCalendar.svg';
import FooterClinicIcon from '@assets/icons/footerClinic.svg';
import FooterCycleIcon from '@assets/icons/footerCycle.svg';
import FooterShareExperienceIcon from '@assets/icons/footerExperiences.svg';
import FooterMateIcon from '@assets/icons/footerMate.svg';

export const FOOTER_PAGES_LIST = [
  { url: '/protected/shareExperience', Icon: FooterShareExperienceIcon, title: 'تجربه‌ها' },
  { url: '/protected/partner', Icon: FooterMateIcon, title: 'هم‌دل' },
  { url: '/protected/cycle', Icon: FooterCycleIcon, title: 'چرخه' },
  { url: '/protected/clinic', Icon: FooterClinicIcon, title: 'کلینیک' },
  { url: '/protected/calendar', Icon: FooterCalendarIcon, title: 'تقویم' },
];

export const FOOTER_HEIGTH = 80;
