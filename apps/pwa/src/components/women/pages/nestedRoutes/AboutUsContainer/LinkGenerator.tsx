import { externalLink } from '@utils/navigation';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { LinkGeneratorType } from './type';

const LinkGenerator = ({ Icon, link, name }: LinkGeneratorType) => {
  const { colors, typography } = useTheme();
  return (
    <div
      style={{ ...typography.Lable.Small, color: colors.Surface_OnSurfaceVariant }}
      className="flex flex-col items-center gap-2 w-14 cursor-pointer "
      onClick={() => externalLink(link, true)}
    >
      <Icon className="h-6 w-6" />
      <Typography scale="Lable" size="Small" color="Surface_Outline">
        {name}
      </Typography>
    </div>
  );
};

export default LinkGenerator;
