import SubscriptionGenerator from '@components/women/SubscriptionGenerator';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import WidgetSubscriptionHeadlineBtn from './WidgetSubscriptionHeadlineBtn';
import { WidgetSubscriptionCardProps } from './types';

const WidgetSubscriptionCard = ({ data }: WidgetSubscriptionCardProps) => {
  return (
    <WidgetCardContainer
      title={data.title}
      button={data.submitButton}
      titleElement={<WidgetSubscriptionHeadlineBtn {...data.headlineButton} />}
    >
      <SubscriptionGenerator {...data.package} />
    </WidgetCardContainer>
  );
};

export default WidgetSubscriptionCard;
