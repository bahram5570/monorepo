import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import CustomLink from '../CustomLink';
import { MemeryPropsType } from './type';

const Memory = ({ memory, valid }: MemeryPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-xl  items-end"
      style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <div className="flex justify-between items-end ">
        <Typography scale="Title" size="Small">
          {memory.cardTitle}
        </Typography>
      </div>
      {memory.dateText ? (
        <Link
          className="w-full relative"
          href="/protected/partner/memory"
          onClick={() => {
            pageNavigationHandler({ id: 'memoryList', showProgressBar: true });
          }}
        >
          <CustomImage
            src={memory.image || '/assets/images/partner.webp'}
            className="w-full object-cover rounded-xl"
            style={{ aspectRatio: '16/9' }}
          />
        </Link>
      ) : (
        <CustomImage src={memory.image || '/assets/images/partner.webp'} />
      )}

      <div className="flex flex-col justify-end items-end">
        {valid && (
          <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
            {memory.title}
          </Typography>
        )}

        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          {textShorter(memory.description, 120)}
        </Typography>
      </div>

      <CustomLink
        lable={memory.buttonText}
        link={valid ? '/protected/memory/createMemory' : '/protected/partner/start'}
        id="memory-link"
      />
    </div>
  );
};

export default Memory;
