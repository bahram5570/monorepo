import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { InputValueType } from '../type';

const TestResult = ({ high = 0, low = 0 }: InputValueType) => {
  const { colors } = useTheme();

  const generateResults = () => {
    return [
      {
        title: 'فشار خون نرمال',
        range: `140/90>`,
        background:
          high && low !== undefined && high <= 140 && low <= 90 ? colors.Success_SuccessContainer : 'transparent',
        indicatorColor: colors.Success_Success,
      },

      {
        title: 'فشارخون غیر نرمال ',
        range: `140/90<`,
        background: high > 140 || low > 90 ? colors.Error_ErrorContainer : 'transparent',
        indicatorColor: colors.Error_Error,
      },
    ];
  };

  const results = generateResults();

  return (
    <div style={{ background: colors.White }} className="p-3 w-full divide-y-[1px] flex flex-col gap-3 rounded-xl">
      <Typography scale="Lable" size="Medium" className="w-full">
        نتیجه تست فشارخون
      </Typography>
      <div className="flex flex-col">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex flex-row-reverse justify-between items-center mt-2 px-3 py-2 rounded-lg"
            style={{ background: result.background }}
          >
            <div className="flex flex-row-reverse items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: result.indicatorColor }}></div>
              <Typography scale="Body" size="Medium">
                {result.title}
              </Typography>
            </div>
            <div className="flex flex-row-reverse gap-1">
              <Typography scale="Lable" size="Medium">
                mmHg
              </Typography>
              <Typography scale="Lable" size="Medium">
                {result.range}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult;
