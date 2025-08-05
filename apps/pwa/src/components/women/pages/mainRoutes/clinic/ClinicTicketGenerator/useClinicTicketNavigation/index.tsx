import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { ClinicStateEnums } from '../../enumbs';
import { ClinicTicketGeneratorProps } from '../types';

const useClinicTicketNavigation = (props: ClinicTicketGeneratorProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const navigateTicketHandler = () => {
    let linkTo = '';

    switch (props.state) {
      case ClinicStateEnums.NoPay:
        linkTo = `/protected/clinic/doctor/${props.ticketId}-completePayment?fileName=${props.fileName}&text=${props.text}`;
        break;
      default:
        linkTo = `/protected/clinic/clinicChat?ticketId=${props.ticketId}`;
        break;
    }

    pageNavigationHandler({ id: 'useClinicTicketNavigation', showProgressBar: true, linkTo });
  };

  return { navigateTicketHandler };
};

export default useClinicTicketNavigation;
