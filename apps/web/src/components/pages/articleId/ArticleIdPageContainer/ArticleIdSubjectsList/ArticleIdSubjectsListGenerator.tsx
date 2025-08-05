import { MouseEvent } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdSubjectsListGeneratorTypes } from './types';

const ArticleIdSubjectsListGenerator = ({
  isFirstElement,
  tagType,
  title,
  id,
}: ArticleIdSubjectsListGeneratorTypes) => {
  const selectHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const el = document.getElementById(`${id}`);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div onClick={selectHandler} style={{ paddingTop: isFirstElement ? '20px' : '0px' }}>
      <CustomTypography
        className="hover:opacity-80 duration-200 cursor-pointer"
        fontSize={tagType === 'h2' ? 'Lable_Medium' : 'Body_Medium'}
        style={{ padding: tagType === 'h2' ? '8px 0' : '0 12px 4px 0' }}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default ArticleIdSubjectsListGenerator;
