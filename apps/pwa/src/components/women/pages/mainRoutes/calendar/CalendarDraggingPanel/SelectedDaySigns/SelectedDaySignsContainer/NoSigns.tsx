import Typography from '@components/ui/Typography';

const NoSigns = () => {
  return (
    <div className="flex flex-col items-end pr-4">
      <Typography scale="Body" size="Large">
        هنوز نشانه ای برای امروز ثبت نکردی
      </Typography>

      <Typography scale="Body" size="Medium" color="Neutral_OnSurface">
        برای ثبت نشانه روی علامت + بزن
      </Typography>
    </div>
  );
};

export default NoSigns;
