import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Loading from '@components/ui/Loading';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { ShareExperienceApproveModalsModuleProps } from './types';

const ShareExperienceApproveModalsModule = ({
  cancelButtonText,
  applyButtonText,
  applyHandler,
  description,
  isLoading,
  isOpen,
  title,
  icon,
}: ShareExperienceApproveModalsModuleProps) => {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <>
      {isLoading && <Loading />}

      <CustomModal className="!w-[calc(100%_-_32px)] !min-h-fit" isOpen={isOpen} zIndex={76}>
        <div className="w-full rounded-xl flex flex-col items-center justify-center gap-4">
          {icon && icon}

          <Typography scale="Title" size="Small" color="Neutral_OnSurface">
            {title}
          </Typography>

          <Typography scale="Body" size="Medium" color="Neutral_OnSurface" textAlign="center">
            {description}
          </Typography>

          <div className="w-full flex items-center gap-4">
            <Button
              size="medium"
              variant="fill"
              color="FREE-STYLES"
              onClick={applyHandler}
              contentsColor={colors.Error_Error}
              buttonColor={colors.Error_ErrorContainer}
            >
              {applyButtonText}
            </Button>

            <Button variant="fill" size="medium" color="surface" onClick={() => router.back()}>
              {cancelButtonText}
            </Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default ShareExperienceApproveModalsModule;
