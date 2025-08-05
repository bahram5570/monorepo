import PlusIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import MemoryList from './MemoryList';
import { HasDataMemoryPropsType } from './type';

const HasDataMemory = ({ memories, isFetchingNextPage }: HasDataMemoryPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  return (
    <div className="p-4">
      <Typography scale="Lable" size="Large" color="PrimaryWoman_Primary" textAlign="right" className="w-full">
        خاطره‌ بازی
      </Typography>

      <MemoryList memories={memories} isFetchingNextPage={isFetchingNextPage} />
      <Link
        href={'/protected/memory/createMemory'}
        onClick={() => pageNavigationHandler({ id: 'memory', showProgressBar: true })}
        className="mt-auto mb-4 fixed bottom-0 left-0 right-0 z-40"
      >
        <div className="flex flex-row items-center gap-1 justify-center">
          <div
            className="pl-6 pr-4 py-3 flex justify-end items-center rounded-full gap-1"
            style={{ background: colors.PrimaryWoman_Primary }}
          >
            <Typography scale="Title" size="Small" color="PrimaryMan_OnPrimaryMan">
              خاطره جدید
            </Typography>
            <PlusIcon className="w-5 h-5" style={{ stroke: colors.White }} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HasDataMemory;
