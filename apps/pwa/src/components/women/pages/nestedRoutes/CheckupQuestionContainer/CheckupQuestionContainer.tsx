import useTheme from '@hooks/useTheme';

const CheckupQuestionContainer = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();
  return (
    <div style={{ background: colors.White }} className="rounded-t-lg rounded-b-lg flex flex-row relative ">
      <div
        className="absolute right-0 top-0 bottom-0 w-1  rounded-r-lg"
        style={{ background: colors.PrimaryWoman_Primary }}
      ></div>
      {children}
    </div>
  );
};

export default CheckupQuestionContainer;
