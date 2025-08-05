'use client';

import ClinicInfoContainer from '@components/women/pages/mainRoutes/clinic/ClinicInfoContainer';

const ClinicInfo = (props: { params: { clinicInfo: string } }) => {
  return <ClinicInfoContainer clinicInfo={props.params.clinicInfo} />;
};

export default ClinicInfo;
