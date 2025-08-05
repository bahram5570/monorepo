import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const Game = () => {
  return (
    <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
          رهایی ذهن؛ بازی
        </CustomTypography>

        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          چرا بازی‌کردن می‌تونه کمک‌کننده باشه؟
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          تو شرایطی که ذهن از همه‌ طرف فشار میاره، بازی می‌تونه مثل یک استراحت روانی کوتاه عمل کنه. یه جور تمرین حضور در
          لحظه‌ست—جایی که فقط تویی و یک چالش ساده.
        </CustomTypography>
      </div>

      <div className="my-2">
        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          تاثیر مطالعه روی ذهن:
        </CustomTypography>
        <CustomImage
          height={0}
          width={520}
          sizes="520px"
          alt="distract3"
          src="/assets/images/jaanPanah/JaanPanahTab/distract/3.webp"
          className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
          hasPreviewImage
          previewBackground={COLORS_LIST.White}
        />
      </div>
      <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          چه مدل بازی‌هایی برای این روزها مناسب‌ترن؟
        </CustomTypography>
        <div>
          <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
            1-بازی‌های موبایلی آرام و بی‌زمان
          </CustomTypography>
          <ul className="px-5">
            <li className=" list-disc">
              <CustomLink
                target="_blank"
                id="women-ios-direct"
                aria-label="DownloadAppAndroid"
                href="https://cafebazaar.ir/app/com.plus9.fandogh"
                // style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
                // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
              >
                <CustomTypography fontSize="Lable_Small" color="Surface_InverseSurface" numbersMode="english">
                  «فندق»
                </CustomTypography>
              </CustomLink>
            </li>
            <li className=" list-disc">
              <CustomLink
                target="_blank"
                id="women-ios-direct"
                aria-label="DownloadAppAndroid"
                href="https://cafebazaar.ir/app/com.BrainLadder.Amirza"
                // style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
                // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
              >
                <CustomTypography fontSize="Lable_Small" color="Surface_InverseSurface" numbersMode="english">
                  «آمیرزا»
                </CustomTypography>
              </CustomLink>
            </li>
          </ul>
        </div>
        <div>
          <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
            2-بازی‌های گروهی سبک
          </CustomTypography>
          <ul className="px-5">
            <li className=" list-disc">
              <CustomLink
                target="_blank"
                href="https://cafebazaar.ir/app/ir.developer.goalorpooch_compose"
                // style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
                // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
              >
                <CustomTypography fontSize="Lable_Small" color="Surface_InverseSurface" numbersMode="english">
                  گل یا پوچ
                </CustomTypography>
              </CustomLink>
            </li>
          </ul>
        </div>

        <div>
          <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
            3-بازی‌های رقابتی غیرخشن و پرانرژی
          </CustomTypography>
          <ul className="px-5">
            <li className=" list-disc">
              <CustomLink
                target="_blank"
                href="https://cafebazaar.ir/app/co.palang.QuizOfKings"
                // style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
                // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
              >
                <CustomTypography fontSize="Lable_Small" color="Surface_InverseSurface" numbersMode="english">
                  Quiz of Kings
                </CustomTypography>
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Game;
