import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { articleImageUrl } from '@services/http';

import { ArticleCardGeneratorTypes } from './types';

const ArticleCardGenerator = ({ data }: ArticleCardGeneratorTypes) => {
  const { breakPoint } = useBreakPoint();

  const imageUrl = data.imageCover ? articleImageUrl + data.imageCover : '/assets/images/notLoaded.svg';

  return (
    <CustomLink
      aria-label="ArticleCardGenerator"
      href={`/${data.url}`}
      style={{ backgroundColor: COLORS_LIST.Neutral_Background }}
      className="w-[280px] lg:w-[380px] h-[300px] lg:h-[340px] flex flex-col items-center rounded-2xl overflow-hidden"
    >
      <div className="relative w-full h-[160px] lg:h-[210px]">
        <CustomImage
          fill={true}
          src={imageUrl}
          alt={data.imageCoverAlt}
          className="object-cover w-full h-auto"
          sizes="(max-width: 1024px) 280px, 380px"
        />
      </div>

      <div className="px-4">
        <CustomTypography
          className="pt-4 pb-2"
          color={'Surface_Outline'}
          fontSize={breakPoint.laptop ? 'Lable_Medium' : 'Body_Medium'}
        >
          {data.categories[0].title}
        </CustomTypography>

        <CustomTypography fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}>{data.title}</CustomTypography>
      </div>
    </CustomLink>
  );
};

export default ArticleCardGenerator;
