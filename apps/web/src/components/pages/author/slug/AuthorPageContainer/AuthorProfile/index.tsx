import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { articleImageUrl } from '@services/http';

import { AuthorProfileTypes } from './types';

const AuthorProfile = ({ authorName, authorPic, description }: AuthorProfileTypes) => {
  const imageUrl = authorPic ? articleImageUrl + authorPic : '/assets/images/notLoaded.svg';

  return (
    <div className="w-full flex items-center gap-3 py-8">
      <div className="relative w-16 h-16">
        <CustomImage src={imageUrl} alt={authorName} fill={true} className="rounded-full object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <CustomTypography fontSize="Lable_Large" tagType="h3">
          {authorName}
        </CustomTypography>

        <CustomTypography fontSize="Lable_Small" color={'Surface_Outline'}>
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default AuthorProfile;
