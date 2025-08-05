import { COLORS_LIST } from '@theme/colors';

import styles from './styles.module.css';
import { JobContentsTypes } from './types';

const JobContents = ({ jobDescription }: JobContentsTypes) => {
  return (
    <div className="w-full">
      <div dangerouslySetInnerHTML={{ __html: jobDescription }} className={styles.main} />
      <div className="w-full h-[1px] mt-4 mb-6 md:my-8" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
    </div>
  );
};

export default JobContents;
