import useTheme from '@hooks/useTheme';

const CalendarHandle = () => {
  const { colors } = useTheme();

  return <div style={{ backgroundColor: colors.Surface_OutlineVariant }} className="w-20 h-1 rounded-full block" />;
};

export default CalendarHandle;
