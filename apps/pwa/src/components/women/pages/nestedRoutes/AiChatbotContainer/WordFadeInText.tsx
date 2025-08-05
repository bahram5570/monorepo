import { parseFormattedText } from './utils';

import useTheme from '@hooks/useTheme';

const WordFadeInText = ({ text }: { text: string }) => {
  const { typography } = useTheme();
  const lines = text.split('\n');
  let globalWordIndex = 0;

  return (
    <div dir="rtl" className="text-right mr-3">
      {lines.map((line, lineIndex) => {
        const formattedLine = parseFormattedText(line);

        const parts = formattedLine.split(/(\s+)/).filter((word) => word.trim().length > 0 || word === ' ');

        return (
          <div key={lineIndex} className="flex flex-wrap items-center mb-2">
            {parts.map((part, i) => {
              const delay = globalWordIndex * 0.1;
              globalWordIndex += 1;

              return (
                <p
                  key={`${lineIndex}-${i}`}
                  className="opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${delay}s`,
                    display: 'inline',
                    ...typography.Body.Large,
                  }}
                  dangerouslySetInnerHTML={{ __html: part + '&nbsp;' }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordFadeInText;
