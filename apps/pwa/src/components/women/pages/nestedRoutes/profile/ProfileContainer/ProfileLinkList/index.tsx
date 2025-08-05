import BreastfeedingSetting from '../BreastfeedingSettings';
import PregnancySettings from '../PregnancySettings';
import ProfileLinkGenerator from '../ProfileLinkGenerator';
import { PROFILE_LINK_LIST } from './constants';
import { ProfileLinkListPropsType } from './type';

const ProfileLinkList = ({ hasSubscribtion, isDelivery, pregnancyDate, status }: ProfileLinkListPropsType) => {
  const filteredProfileLinks = hasSubscribtion
    ? PROFILE_LINK_LIST
    : PROFILE_LINK_LIST.filter((item) => !item.needsSubscription);

  return (
    <>
      {hasSubscribtion && <PregnancySettings isDelivery={isDelivery} pregnancyDate={pregnancyDate} status={status} />}
      {hasSubscribtion && (
        <BreastfeedingSetting isDelivery={isDelivery} pregnancyDate={pregnancyDate} status={status} />
      )}

      {filteredProfileLinks.map((item, index) => (
        <ProfileLinkGenerator key={index} {...item} isLastItem={filteredProfileLinks.length - 1 === index} />
      ))}
    </>
  );
};

export default ProfileLinkList;
