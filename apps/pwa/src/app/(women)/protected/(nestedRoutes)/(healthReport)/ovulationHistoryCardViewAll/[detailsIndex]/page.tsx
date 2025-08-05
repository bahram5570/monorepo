import OvulationHistoryCardDetailsContainer from '@components/women/pages/nestedRoutes/OvulationHistoryCardViewAllContainer/OvulationHistoryCardDetailsContainer';

const OvulationHistoryCardDetails = (props: { params: { detailsIndex: string } }) => {
  return <OvulationHistoryCardDetailsContainer detailsIndex={+props.params.detailsIndex} />;
};

export default OvulationHistoryCardDetails;
