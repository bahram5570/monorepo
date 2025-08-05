import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { articleImageUrl } from '@services/http';

import GeneratorProfile from './GeneratorProfile';
import GeneratorScripts from './GeneratorScripts';
import { CategoryArticlesGeneratorTypes } from './types';

const CategoryArticlesGenerator = (props: CategoryArticlesGeneratorTypes) => {
  const imageUrl = props.imageCover ? articleImageUrl + props.imageCover : '/assets/images/notLoaded.svg';

  return (
    <div
      className="w-full grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr] gap-5 py-[8px] lg:py-[32px] border-t-[1px]"
      style={{
        borderTopColor: props.isFirstIndex ? COLORS_LIST.Transparent : COLORS_LIST.Neutral_Surface,
      }}
    >
      <div
        className="
                    relative 
                    w-[110px] 
                    h-[70px] 
                    md:w-[160px] 
                    md:h-[100px] 
                    lg:w-[280px] 
                    lg:h-[210px] 
                    row-start-1 
                    row-end-2 
                    lg:row-start-1 
                    lg:row-end-12 
                    col-start-2 
                    lg:col-start-1 
                    lg:col-end-2 
                    rounded-2xl 
                    lg:hover:rounded-3xl 
                    lg:duration-300 
                    overflow-hidden
                "
      >
        <CustomLink href={`/${props.url}`}>
          <CustomImage className="object-cover w-full h-auto" alt={props.title} src={imageUrl} fill={true} />
        </CustomLink>
      </div>

      <div className="row-start-1 row-end-2 lg:row-start-1 lg:row-end-9 col-start-1 col-end-2 lg:col-start-2">
        <GeneratorScripts body={props.body} title={props.title} url={props.url} />
      </div>

      <div className="row-start-2 row-end-3 lg:row-start-9 lg:row-end-12 col-start-1 col-end-3 lg:col-start-2">
        <GeneratorProfile
          commentCount={props.commentCount}
          publishTime={props.publishTime}
          rateCount={props.rateCount}
          author={props.author}
        />
      </div>
    </div>
  );
};

export default CategoryArticlesGenerator;
