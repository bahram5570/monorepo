import { useEffect, useState } from 'react';

import AddBoxIcon from '@assets/icons/add_box.svg';
import AddToHomeScreenIcon from '@assets/icons/add_to_home_screen.svg';
import IOSShareIcon from '@assets/icons/ios_share.svg';
import ImpoLogoIcon from '@assets/icons/logo.svg';
import MoreVertIcon from '@assets/icons/more_vert.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useOperatingSystem from '@hooks/useOperatingSystem';
import useTheme from '@hooks/useTheme';

import { BrowserEnum } from './enum';
import { AddToHomeModuleTypeProps } from './type';

const AddToHomeModule = ({ closeModuleHandler }: AddToHomeModuleTypeProps) => {
  const { colors } = useTheme();
  const { isAddToHome } = useOperatingSystem();
  const [browser, setBrowser] = useState<BrowserEnum>(BrowserEnum.None);

  useEffect(() => {
    if (isAddToHome) {
      closeModuleHandler();
      return;
    }

    const userAgent = navigator.userAgent;

    if (userAgent.includes('Safari') && !userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {
      setBrowser(BrowserEnum.Safari);
    } else {
      setBrowser(BrowserEnum.Chrome);
    }
  }, [isAddToHome]);

  return (
    <>
      {browser !== BrowserEnum.None && (
        <div
          style={{ backgroundColor: colors.White }}
          className="flex relative flex-col items-center gap-6 h-[100dvh] justify-center"
        >
          <div className="flex flex-col justify-center items-center w-full gap-9">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex flex-col items-center justify-center gap-6">
                  <ImpoLogoIcon />
                  <Typography scale="Body" size="Large" color="Neutral_OnBackground" className=" text-center">
                    وب اپلیکیشن ایمپو رو به صفحه اصلی گوشیت اضافه کن
                  </Typography>
                  <div
                    style={{ backgroundColor: colors.Grey_50 }}
                    className="flex justify-end items-end flex-col gap-2 p-4 rounded-lg mx-3"
                  >
                    <div className="flex flex-row-reverse items-center justify-center">
                      <Typography scale="Body" size="Large">
                        1- دکمه
                      </Typography>
                      {browser === BrowserEnum.Chrome ? <MoreVertIcon /> : <IOSShareIcon />}

                      <Typography scale="Body" size="Large">
                        رو انتخاب کن.
                      </Typography>
                    </div>
                    <div className="flex flex-row-reverse  flex-wrap ">
                      <Typography scale="Body" size="Large">
                        2- در منوی باز شده، گزینه”Add to home screen ”
                      </Typography>
                      {browser === BrowserEnum.Chrome ? <AddToHomeScreenIcon /> : <AddBoxIcon />}

                      <Typography scale="Body" size="Large">
                        رو انتخاب کن.
                      </Typography>
                    </div>

                    <Typography scale="Body" size="Large">
                      3- حالا روی دکمه “ Add “ بزن.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="fixed bottom-0 left-0 right-0 z-10 p-4 mx-auto"
            style={{ backgroundColor: colors.White, maxWidth: MAX_SCREEN_WIDTH }}
          >
            <div className="flex w-full">
              <Button size="medium" variant="fill" color="primary" fullWidth={true} onClick={closeModuleHandler}>
                متوجه شدم
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToHomeModule;
