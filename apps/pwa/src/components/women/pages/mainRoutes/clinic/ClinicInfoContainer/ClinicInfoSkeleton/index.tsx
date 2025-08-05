import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const ClinicInfoSkeleton = () => {
  const { colors } = useTheme();

  const styles = { backgroundColor: colors.Neutral_Surface };

  return (
    <div className="w-full flex flex-col gap-4 p-4 animate-skeleton" style={{ paddingTop: HEADER_HEIGHT + 20 }}>
      <div className="w-full flex justify-between">
        <div className="w-[120px] h-[32px] rounded-full" style={styles} />
        <div className="w-[120px] h-[16px] rounded-md" style={styles} />
      </div>

      <div className="w-full h-[160px] rounded-md" style={styles} />
      <div className="w-full h-[40px] rounded-md" style={styles} />
      <div className="w-full h-[200px] rounded-md" style={styles} />
    </div>
  );
};

export default ClinicInfoSkeleton;
