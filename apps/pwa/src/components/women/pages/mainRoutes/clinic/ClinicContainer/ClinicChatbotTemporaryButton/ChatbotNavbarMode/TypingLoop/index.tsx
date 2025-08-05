import React, { useEffect, useState } from 'react';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { TypingLoopPropsType } from './type';

const TypingLoop = ({ collapseText1, collapseText2 }: TypingLoopPropsType) => {
  const messages = [collapseText1, collapseText2];

  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const { colors, typography } = useTheme();

  useEffect(() => {
    const currentMessage = messages[msgIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentMessage.length) {
        timeout = setTimeout(() => {
          setText(currentMessage.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 120); // ⌨️ Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800); // pause before deleting
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentMessage.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 100); // 🧼 Smoother deletion speed
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }, 500); // small pause before next message
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, msgIndex]);

  // Cursor blinking
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      style={{
        color: colors.Neutral_OnBackground,
        ...typography.Lable.Medium,
      }}
      className="flex flex-row-reverse justify-center items-center gap-1"
    >
      <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
        {text}
      </Typography>

      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </div>
  );
};

export default TypingLoop;
