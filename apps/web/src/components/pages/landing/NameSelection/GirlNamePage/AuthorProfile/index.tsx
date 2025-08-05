import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { AuthorProfileProps } from './type';

const AuthorProfile = (props: AuthorProfileProps) => {
  const { name, imageUrl, readingTime, publishDate } = props;
  return (
    <>
      <div className="w-full lg:w-6/12 flex flex-col md:flex-row md:items-center justify-between mt-6">
        {/* <CustomLink href={`/author/${props.id}`}> */}
        <div className="flex gap-3">
          <div className="relative w-16 h-16">
            <CustomImage className="rounded-full object-cover" alt={name} src={imageUrl} sizes="64px" fill={true} />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <CustomTypography fontSize="Title_Small">{`نویسنده:${name}`}</CustomTypography>
          </div>
        </div>
        {/* </CustomLink> */}

        <div className="w-fit flex items-center justify-between pr-[76px] md:pr-0">
          <div className="flex items-center gap-2 md:gap-4">
            <CustomTypography fontSize="Lable_Medium" color={'Surface_Outline'}>
              {readingTime}
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" color={'Surface_Outline'}>
              .
            </CustomTypography>

            <CustomTypography fontSize="Lable_Medium" color={'Surface_Outline'}>
              {publishDate}
            </CustomTypography>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] my-3" style={{ backgroundColor: '#D0D0D020' }} />
    </>
  );
};

export default AuthorProfile;
