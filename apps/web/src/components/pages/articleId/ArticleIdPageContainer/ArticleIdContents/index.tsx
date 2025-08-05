import styles from './styles.module.css';
import { ArticleIdContentsTypes } from './types';

const ArticleIdContents = ({ body }: ArticleIdContentsTypes) => {
  return <div dangerouslySetInnerHTML={{ __html: body }} className={styles.container} />;
};

export default ArticleIdContents;
