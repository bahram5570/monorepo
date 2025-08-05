/* eslint-disable @next/next/no-img-element */
import { COLORS_LIST } from '@theme/colors';
import { FONTS_ANDROID } from '@theme/fonts';

import { CtaBannerTypes } from './types';

const CtaBanner = ({ id, backgroundColor, title, description, image, link, buttonLabel, name }: CtaBannerTypes) => {
  return (
    <div className="relative w-fit py-5 mx-auto">
      <a href={link} id={id}>
        <div
          style={{ backgroundColor }}
          className="
                      w-full 
                      max-w-[1000px]
                      h-fit
                      min-h-[380px] 
                      md:min-h-[230px]
                      flex 
                      flex-col 
                      md:flex-row 
                      rounded-2xl 
                      bg-right-top
                      bg-cover
                      bg-no-repeat 
                      bg-[url(/assets/images/ctaBannerMaskMobile.webp)] 
                      md:bg-[url(/assets/images/ctaBannerMaskDesktop.webp)] 
                      overflow-hidden
                    "
        >
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start pt-10 px-8">
            <p
              className="
                          text-black
                          !text-[19px] 
                          !font-[700] 
                          !leading-[150%] 
                          !tracking-[-0.285px] 
                          md:!text-[24px] 
                          md:!font-[600] 
                          md:!leading-[140%] 
                          md:!tracking-[-0.36px]
                        "
            >
              {title.trim()}
            </p>

            <p
              className="
                          pt-2 
                          pb-5
                          text-black
                          !text-[16px] 
                          !font-[500] 
                          !leading-[160%] 
                          !tracking-[-0.225px] 
                          md:!leading-[160%] 
                          md:!tracking-[-0.225px]
                        "
            >
              {description.trim()}
            </p>

            <div
              className="py-2 px-6 md:mt-auto md:mb-6 rounded-full animate-bounce"
              style={{
                color: COLORS_LIST.White,
                ...FONTS_ANDROID.Body_Large,
                backgroundColor: COLORS_LIST.Primary_Primary,
              }}
            >
              {buttonLabel?.trim() || ''}
            </div>
          </div>

          <img
            alt={name}
            src={image}
            className="!w-full md:!w-5/12 !h-auto object-contain !mb-0 !mt-auto pt-4 md:pt-0"
          />
        </div>
      </a>
    </div>
  );
};

export default CtaBanner;
