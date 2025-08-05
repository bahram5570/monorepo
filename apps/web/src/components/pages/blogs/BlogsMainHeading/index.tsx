import BlogsSearch from '@components/Articles/Blogs/BlogsSearch';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const BlogsMainHeading = () => {
  return (
    <div className="relative w-full h-[360px] md:h-[480px] bg-gradient-to-b from-[#F45D90] to-[#EC407A]">
      <CustomImage
        alt=""
        fill={true}
        src={'/assets/images/blogsMainHeadingMask.webp'}
        className="absolute top-0 left-0 right-0 bottom-0 opacity-60"
      />

      <div className="absolute bottom-[110px] md:bottom-[127px] left-0 right-0 flex flex-col items-center justify-center gap-4 md:gap-7">
        <CustomTypography tagType="h1" fontSize="Headline_Large" color={'White'}>
          مجله سلامت ایمپو
        </CustomTypography>

        <div className="w-[280px] md:w-[560px]">
          <BlogsSearch />
        </div>
      </div>
    </div>
  );
};

export default BlogsMainHeading;
