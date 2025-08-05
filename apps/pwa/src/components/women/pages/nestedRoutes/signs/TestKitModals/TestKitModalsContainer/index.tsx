import CloseIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { TestKitModalsContainerProps } from './types';

const TestKitModalsContainer = ({ title, children }: TestKitModalsContainerProps) => {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <div className="w-[72px] h-1 rounded-full" style={{ backgroundColor: colors.Surface_OutlineVariant }} />

      <div className="relative flex justify-center items-center h-12 w-full mb-4 mt-2">
        <Typography scale="Title" size="Small">
          {title}
        </Typography>

        <div className="w-12 h-12 flex items-center justify-center absolute top-0 left-0" onClick={() => router.back()}>
          <CloseIcon className="w-6 h-auto rotate-45 cursor-pointer" style={{ stroke: colors.Neutral_OnSurface }} />
        </div>
      </div>

      <div className="w-full max-h-[400px] px-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default TestKitModalsContainer;
