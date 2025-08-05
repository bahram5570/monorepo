import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const ProgressBar = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex flex-col items-center gap-5 px-5 pt-16">
      <Typography scale="Body" size="Large">
        چند لحظه صبر کنید
      </Typography>

      <div
        className="relative w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: colors.Neutral_Surface }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 w-full rounded-full animate-welcoming"
          style={{ backgroundColor: colors.PrimaryWoman_Primary }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
