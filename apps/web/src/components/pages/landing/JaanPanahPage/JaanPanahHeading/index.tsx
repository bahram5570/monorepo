import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const JaanPanahHeading = () => {
  return (
    <div className="relative w-full pt-[60px]">
      <div className="absolute top-0 left-0 right-0 bottom-[24px] sm:bottom-[36px] bg-gradient-to-br from-[#44D7A6] to-[#EAFFDF]" />

      <div className="absolute bottom-[40%] right-[10%] xl:right-[30%] 2xl:right-[40%] hidden sm:flex flex-col items-center gap-2 z-10">
        <CustomTypography fontSize="Headline_Large">جان پناه</CustomTypography>
        {/* <CustomTypography fontSize="Body_Large">پناهی برای این روزها، عزیزِ جان</CustomTypography> */}
        <CustomTypography fontSize="Body_Large"> پناهی برای روح و روان </CustomTypography>
      </div>

      <div className="relative w-full sm:w-[400px] md:w-[600px] aspect-square sm:mr-auto sm:mt-auto">
        <div className="absolute top-[28%] left-[30%] flex flex-col items-center sm:hidden z-10">
          <CustomTypography fontSize="Headline_Medium">جان پناه</CustomTypography>
          {/* <CustomTypography fontSize="Body_Large">پناهی برای این روزها، عزیزِ جان</CustomTypography> */}
          <CustomTypography fontSize="Body_Large"> پناهی برای روح و روان </CustomTypography>
        </div>

        <CustomImage
          alt=""
          width={600}
          height={600}
          src="/assets/images/jaanPanah/heading.webp"
          className="object-contain object-left-bottom"
        />
      </div>
    </div>
  );
};

export default JaanPanahHeading;
