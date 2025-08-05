import { useEffect, useState } from 'react';

import Spinner from '@components/ui/Spinner';
import ShareExperienceBottomPart from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceContentsModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceContentsModule';
import useTheme from '@hooks/useTheme';

import ShareExperenceProfileTabListEmpty from '../ShareExperenceProfileTabListEmpty';
import useActivitiesData from './__hooks__/useActivitiesData';
import { ShareExperienceProfileActivitiesPropsType } from './type';

const ShareExperienceProfileActivities = ({ id, isSelf }: ShareExperienceProfileActivitiesPropsType) => {
  const { colors } = useTheme();
  const { experiencesData, isLoading } = useActivitiesData({ id });
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (experiencesData?.expirences !== undefined && experiencesData?.expirences?.length > 0) {
      setIsFirstLoad(false);
    }
  }, [experiencesData]);

  return (
    <>
      {experiencesData?.expirences.length === 0 && <ShareExperenceProfileTabListEmpty />}

      {isLoading && isFirstLoad && (
        <div className="w-full flex justify-center pt-48">
          <Spinner color="primary" width={40} />
        </div>
      )}

      {experiencesData?.expirences.length !== undefined && experiencesData?.expirences.length > 0 && (
        <div className="flex flex-col px-4">
          {experiencesData?.expirences.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full border-t-[1px] pt-5 pb-4 z-0"
              style={{ borderTopColor: colors.Surface_SurfaceVariant }}
            >
              <ShareExperienceTopPart {...item} selfExperience={isSelf} />

              <div className="w-full pr-10">
                <ShareExperienceContentsModule
                  isSelf={false}
                  image={item.image}
                  text={item.text}
                  hasLinkTo={true}
                  id={item.id}
                />

                <ShareExperienceBottomPart {...item} selfExperience={false} />
              </div>
            </div>
          ))}

          {isLoading && !isFirstLoad && (
            <div className="w-full flex justify-center ">
              <Spinner color="primary" width={40} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShareExperienceProfileActivities;
