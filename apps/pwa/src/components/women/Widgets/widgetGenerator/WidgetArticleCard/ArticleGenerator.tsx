import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import Link from 'next/link';

import { ArticleGeneratorProps } from './types';

const ArticleGenerator = ({ image, link, title }: ArticleGeneratorProps) => {
  return (
    <Link href={link} target="_blank" className="w-[140px] min-w-[140px]">
      <CustomImage src={image} width={140} height={80} className="rounded-lg" />

      <Typography scale="Lable" size="Medium" className="">
        {title}
      </Typography>
    </Link>
  );
};

export default ArticleGenerator;
