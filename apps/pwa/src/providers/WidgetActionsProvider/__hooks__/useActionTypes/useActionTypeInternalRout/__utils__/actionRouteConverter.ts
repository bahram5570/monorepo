import { enterphaseHandler } from './enterphaseHandler';
import { shareExperienceHandler } from './shareExperienceHandler';

export const actionRouteConverter = (serverLink: string) => {
  const baseRoute = serverLink.split('?')[0];
  const queries = serverLink.split('?')[1];
  let result = '';

  switch (baseRoute) {
    case '/signs':
      result = '/protected/signs';
      break;

    case '/calendar':
      result = '/protected/calendar';
      break;

    case '/partner':
      result = '/protected/partner';
      break;

    case '/profile':
      result = '/protected/profile';
      break;

    case '/support':
      result = '/protected/support';
      break;

    case '/support/category':
      result = '/protected/supportTicket';
      break;

    case '/partner/messenger':
      result = '/protected/partner/message';
      break;

    case '/partner/memory':
      result = '/protected/partner/memory';
      break;

    case '/partner/challenge/daly':
      result = '/protected/partner/challenge';
      break;

    // todo fix
    case '/chat':
      result = '/protected/partner/challenge';
      break;

    case '/partner/challenge/archive':
      result = '/protected/partner/history';
      break;

    // todo fix reminder
    case '/reminder':
      result = '';
      break;

    case '/shareExperience':
      result = shareExperienceHandler(queries);
      break;

    case '/subscription':
      result = '/protected/subscription';
      break;

    case '/reports':
      result = '/protected/healthReport';
      break;

    case '/cycle':
      result = '/protected/cycle';
      break;

    case '/clinic':
      result = '/protected/clinic';
      break;

    case '/enterphase':
      result = enterphaseHandler(queries);
      break;

    case '/diet':
      result = `/protected/routin?searchData=${encodeURIComponent(queries)}`;
      break;

    case '/diet/item':
      result = `/protected/routin/routinItem?searchData=${encodeURIComponent(queries)}`;
      break;

    case '/weight':
      result = `/protected/bmi/weight${queries ? `?${queries}` : ''}`;
      break;

    case '/weightbeforpregnancy':
      result = `/protected/bmi/weightbeforpregnancy${queries ? `?${queries}` : ''}`;
      break;

    case '/height':
      result = `/protected/bmi/height${queries ? `?${queries}` : ''}`;
      break;

    case '/pregnancyCare':
      result = '/protected/pregnancyCheckup';
      break;

    case '/checkup':
      result = `/protected/checkupQuestion?${queries}`;
      break;

    case '/completeActivation':
      result = '/protected/phaseChange/updateOldUser/step1';
      break;

    case '/babyCheck': // TODO: add this route
      result = '/protected/signs';
      break;

    case '/babyNames/activation':
      result = '/protected/nameSelectorActivation/step1';
      break;

    case '/babyNames/selection':
      result = `/protected/nameSelector?${queries}`;
      break;

    case '/chatbot':
      result = '/protected/aiChatbot';
      break;
  }

  return result;
};
