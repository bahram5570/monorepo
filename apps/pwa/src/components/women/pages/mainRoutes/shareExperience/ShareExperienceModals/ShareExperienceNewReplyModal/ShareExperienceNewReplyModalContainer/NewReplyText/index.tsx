import { ChangeEvent } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { NEW_REPLY_MAX_CHARACTERS } from '../constants';
import { NewReplyTextProps } from './types';

const NewReplyText = ({ text, textHandler }: NewReplyTextProps) => {
  const { typography } = useTheme();

  const valueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.trim().length <= NEW_REPLY_MAX_CHARACTERS) {
      textHandler(toPersianNumbers(value));
    }
  };

  return (
    <textarea
      rows={4}
      value={text}
      onChange={valueHandler}
      className={styles.textarea}
      style={{ ...typography.Body.Medium }}
      placeholder="نظرت رو اینجا بنویس..."
    />
  );
};

export default NewReplyText;
