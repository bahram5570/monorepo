import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const TestResult = ({ condition, value }: { condition: number | null; value: number | null }) => {
  const { colors } = useTheme();

  const generateResults = () => {
    const range = condition === 0 ? 95 : 120;

    return [
      {
        title: 'نرمال',
        range: `${range}>`,
        background: value && value < range ? colors.Success_SuccessContainer : 'transparent',
        indicatorColor: colors.Success_Success,
      },
      {
        title: 'مشکوک به دیابت',
        range: `${range}-${range + 10}`,
        background: value && value >= range && value <= range + 10 ? colors.Warning_WarininContainer : 'transparent',
        indicatorColor: colors.Warning_Warning,
      },
      {
        title: 'دیابت',
        range: `${range + 10}>`,
        background: value && value > range + 10 ? colors.Error_ErrorContainer : 'transparent',
        indicatorColor: colors.Error_Error,
      },
    ];
  };

  const results = generateResults();

  return (
    <div style={{ background: colors.White }} className="p-3 w-full divide-y-[1px] flex flex-col gap-3 rounded-xl">
      <Typography scale="Lable" size="Medium" className="w-full">
        نتیجه تست قندخون
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
                mg/dL
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
