import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import { ArticleIdNewTextareaTypes } from './types';

const ArticleIdNewTextarea = ({ message, messageHandler }: ArticleIdNewTextareaTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const typographyDetails = typographyMaker({ fontSize: 'Body_Medium', operatingSystem, isWeb: !breakPoint.laptop });

  return (
    <textarea
      rows={6}
      value={message}
      className="w-full p-4 rounded-xl"
      onChange={(e) => messageHandler(e.target.value)}
      style={{
        ...typographyDetails,
        outlineColor: COLORS_LIST.Primary_Primary,
        backgroundColor: COLORS_LIST.Surface_SurfaceVariant,
      }}
    />
  );
};

export default ArticleIdNewTextarea;
