import InfoIcon from '@assets/icons/infoIcon.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const SelectedDaySignsNotAllowed = () => {
  const { colors } = useTheme();

  return (
    <div className="flex justify-end gap-2 w-full pt-2">
      <Typography scale="Body" size="Small">
        نمیتونی برای آینده نشانه انتخاب کنی
      </Typography>

      <InfoIcon className="w-4 h-auto" style={{ fill: colors.Yellow_500 }} />
    </div>
  );
};

export default SelectedDaySignsNotAllowed;
