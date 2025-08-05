import { COLORS_LIST } from '@theme/colors';

import BlueTickIcon from '@assets/icons/blueTick.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { fileImageUrl } from '@services/http';

import ArticleIdProfileInfo from './ArticleIdProfileInfo';
import { ArticleIdProfileTypes } from './types';

const ArticleIdProfile = (props: ArticleIdProfileTypes) => {
  const profileImageUrl = props.profileImage ? fileImageUrl + props.profileImage : '/assets/images/notLoaded.svg';

  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
        <CustomLink href={`/author/${props.id}`}>
          <div className="flex gap-3">
            <div className="relative w-16 h-16">
              <CustomImage
                className="rounded-full object-cover"
                alt={props.name || ''}
                src={profileImageUrl}
                sizes="64px"
                fill={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              {typeof props.name !== 'undefined' && (
                <div className="flex items-center gap-1">
                  <CustomTypography fontSize="Lable_Medium">{`بازبینی توسط ${props.name}`}</CustomTypography>
                  <BlueTickIcon className="w-5" />
                </div>
              )}

              <CustomTypography fontSize="Body_Small">{`نویسنده: ${props.authorName}`}</CustomTypography>
            </div>
          </div>
        </CustomLink>

        <ArticleIdProfileInfo
          commentCount={props.commentCount}
          publishTime={props.publishTime}
          wordsCount={props.wordsCount}
          rateCount={props.rateCount}
        />
      </div>

      <div className="w-full h-[1px]" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
    </>
  );
};

export default ArticleIdProfile;
