import { ShareExperienceProfileTabEnum } from '../enum';
import ShareExperienceProfileActivities from './ShareExperienceProfileActivities';
import ShareExperienceProfileSelfList from './ShareExperienceProfileSelfList';
import { ShareExperenceProfileTabListPropsType } from './type';

const ShareExperenceProfileTabList = ({ id, isSelf, tab }: ShareExperenceProfileTabListPropsType) => {
  return (
    <>
      {tab === ShareExperienceProfileTabEnum.Activities && (
        <ShareExperienceProfileActivities id={id} isSelf={isSelf} tab={tab} />
      )}

      {tab === ShareExperienceProfileTabEnum.Self && <ShareExperienceProfileSelfList id={id} isSelf={isSelf} />}
    </>
  );
};

export default ShareExperenceProfileTabList;
