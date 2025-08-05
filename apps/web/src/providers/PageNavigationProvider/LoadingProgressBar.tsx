import { MAX_WIDTH } from '@constants/app.constants';
import { COLORS_LIST } from '@theme/colors';

import styles from './styles.module.css';

const LoadingProgressBar = () => {
  return (
    <div className={styles.container} style={{ maxWidth: MAX_WIDTH }}>
      <div className={styles.progress} style={{ backgroundColor: COLORS_LIST.Red_500 }} />
    </div>
  );
};

export default LoadingProgressBar;
