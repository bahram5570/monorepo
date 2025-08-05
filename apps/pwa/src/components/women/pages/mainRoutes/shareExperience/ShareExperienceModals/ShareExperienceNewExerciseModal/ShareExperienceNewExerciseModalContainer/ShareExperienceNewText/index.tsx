import { ChangeEvent, useEffect, useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { SHARE_EXPERIENCE_NEW_MAX_CHARACTERS } from '../constants';
import { ShareExperienceNewTextProps } from './types';

const ShareExperienceNewText = ({ text, textHandler }: ShareExperienceNewTextProps) => {
  const { typography } = useTheme();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const valueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.trim().length <= SHARE_EXPERIENCE_NEW_MAX_CHARACTERS) {
      textHandler(toPersianNumbers(value));
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  return (
    <textarea
      rows={2}
      value={text}
      ref={textareaRef}
      onChange={valueHandler}
      className={styles.textarea}
      style={{ ...typography.Body.Medium }}
      placeholder="تجربت رو اینجا بنویس..."
    />
  );
};

export default ShareExperienceNewText;
