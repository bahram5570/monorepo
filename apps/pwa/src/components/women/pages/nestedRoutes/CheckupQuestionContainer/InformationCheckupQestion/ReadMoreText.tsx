import { useEffect, useRef, useState } from 'react';

import ArrowDownIcon from '@assets/icons/ArrowDown.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const ReadMoreText = ({ text, maxLines = 3 }: { text: string; maxLines: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const { colors } = useTheme();

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * maxLines + 10;
      setIsTruncated(textRef.current.scrollHeight > maxHeight);
    }
  }, [text]);

  return (
    <div>
      <div
        ref={textRef}
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: isExpanded ? 'unset' : maxLines, // If expanded, show all text
          transition: 'all 0.3s ease',
          maxHeight: isExpanded
            ? 'unset'
            : textRef.current
              ? `${parseInt(window.getComputedStyle(textRef.current).lineHeight) * maxLines}px`
              : 'auto', // Ensure max height is applied
        }}
      >
        <Typography scale="Body" size="Medium" className="py-2">
          {text}
        </Typography>
      </div>

      {isTruncated && (
        <div onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex flex-row-reverse gap-1 justify-end mt-3">
            <Typography scale="Lable" size="Small" color="PrimaryWoman_Primary">
              {isExpanded ? 'بستن اطلاعات بیشتر ' : 'خواندن اطلاعات بیشتر'}
            </Typography>
            {isExpanded ? (
              <ArrowDownIcon className="w-4 h-4" style={{ stroke: colors.PrimaryWoman_Primary }} />
            ) : (
              <ArrowDownIcon className="w-4 h-4 rotate-180" style={{ stroke: colors.PrimaryWoman_Primary }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMoreText;
