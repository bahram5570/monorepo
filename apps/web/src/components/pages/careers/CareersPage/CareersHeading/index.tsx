import CustomImage from '@components/ui/CustomImage';

const CareersHeading = () => {
  return (
    <div className="relative w-full h-[280px] md:h-[540px]">
      <CustomImage
        src={'/assets/images/careers/careersHeading.webp'}
        alt=""
        fill={true}
        sizes="100vw"
        quality={100}
        priority={true}
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
      />
    </div>
  );
};

export default CareersHeading;
