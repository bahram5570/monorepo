import { Fragment, useRef } from 'react';

import styles from '../../../styles.module.css';

import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useTheme from '@hooks/useTheme';

import ShareExperienceBottomPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceBottomPart';
import ShareExperienceTopPart from '../../../ShareExperienceContainer/ShareExperienceExperiences/ShareExperienceTopPart';
import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceNewCommentFooterModule from '../../../ShareExperienceModules/ShareExperienceNewCommentFooterModule';
import ShareExperienceTopicModalContainerLayout from './ShareExperienceTopicModalContainerLayout';
import useGetData from './__hooks__/useGetData';
import useScroll from './__hooks__/useScroll';
import { ShareExperienceTopicModalContainerPropsType } from './type';

const ShareExperienceTopicModalContainer = ({ topicId, avatarImage }: ShareExperienceTopicModalContainerPropsType) => {
  useOverflowHandler();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { experiencesData, isLoading, topicInformation, lastExperienceRef } = useGetData({ topicId });
  const { colors } = useTheme();
  const { scrolled } = useScroll({ ref: modalRef });

  return (
    <>
      <ShareExperienceTopicModalContainerLayout
        coverImage={topicInformation.coverImage}
        bio={topicInformation.bio}
        topicName={topicInformation.name}
        scrolled={scrolled}
        isLoading={isLoading}
      >
        <div
          ref={modalRef}
          className={`overflow-y-auto ${styles.scroller} pt-72 max-h-screen`}
          style={{ paddingBottom: FOOTER_HEIGTH * 2 }}
        >
          {experiencesData?.expirences.map((item, index) => (
            <Fragment key={index}>
              <div
                className="w-full border-t-[1px] pt-5 pb-4 px-4 z-20 bg-white"
                style={{ borderTopColor: colors.Surface_SurfaceVariant }}
              >
                <ShareExperienceTopPart {...item} />

                <div className="w-full pr-10">
                  <ShareExperienceContentsModule
                    isSelf={item.selfExperience}
                    image={item.image}
                    text={item.text}
                    hasLinkTo={true}
                    id={item.id}
                  />

                  <ShareExperienceBottomPart {...item} />
                </div>
              </div>
              <div ref={lastExperienceRef} className="h-10 w-full bg-white" />
            </Fragment>
          ))}
        </div>

        {!isLoading && (
          <ShareExperienceNewCommentFooterModule
            queries={{ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: 'true' }}
            placeholder={topicInformation.inputText}
            avatar={avatarImage || ''}
          />
        )}
      </ShareExperienceTopicModalContainerLayout>
    </>
  );
};

export default ShareExperienceTopicModalContainer;
