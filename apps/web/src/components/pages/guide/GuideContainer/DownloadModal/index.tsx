import { COLORS_LIST } from '@theme/colors';

import { Dialog } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import AppDownloadIcon from '@assets/icons/download-Minimalistic.svg';
import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';
import GooglePlayIcon from '@assets/icons/downloads/googlePlay.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomModal from '@components/ui/CustomModal';
import CustomTypography from '@components/ui/CustomTypography';

import { DownloadModalPropsType } from './type';

const DownloadModal = ({ isOpen, onClose }: DownloadModalPropsType) => {
  return (
    <Dialog
      open={isOpen}
      fullWidth
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        sx: {
          position: 'fixed',
          bottom: 0,
          margin: 0,
          width: '100%',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          maxWidth: '640px',
          marginX: 'auto',
        },
      }}
    >
      <DialogContent>
        <DialogContentText>
          <CustomTypography className="p-4 text-center" fontSize="Title_Small">
            دانلود ایمپو برای اندروید و iOS
          </CustomTypography>
          <div className="flex flex-col justify-center items-center gap-3 py-5">
            <CustomLink
              target="_blank"
              aria-label="DownloadAppAndroid"
              style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}
              href="https://s3.ir-tbz-sh1.arvanstorage.ir/impo/app%20impo/Impo5.4.1%20159_D.apk"
              className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2"
            >
              <AppDownloadIcon className="w-6 min-w-6 h-auto" style={{ fill: COLORS_LIST.White }} />
              <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
                دانلود مستقیم اندروید
              </CustomTypography>
            </CustomLink>
            <div className="flex justify-between items-center gap-2 w-full">
              <CustomLink
                target="_blank"
                aria-label="DownloadAppAndroid"
                href="https://apps.apple.com/us/app/impo-health/id6736879093"
                style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}
                className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
              >
                <AppStoreDownloadIcon className="w-[100px] h-auto" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
              </CustomLink>

              <CustomLink
                target="_blank"
                aria-label="DownloadAppAndroid"
                style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}
                href="https://s3.ir-tbz-sh1.arvanstorage.ir/impo/app%20impo/Impo5.4.1%20159_D.apk"
                className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2"
              >
                <GooglePlayIcon className="w-[100px]" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />

                {/* <AndroidIcon className="w-6 min-w-6 h-auto" style={{ fill: COLORS_LIST.White }} /> */}
              </CustomLink>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadModal;
