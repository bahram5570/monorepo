import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import { memo } from 'react';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import { GeneratorScriptsTypes } from './types';

const GeneratorScripts = ({ body, title, url }: GeneratorScriptsTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const bodyShorter = (input: string) => {
    const text = input.replace(/<[^>]+>/g, '');
    const length = 300;
    let result = text;

    if (text.trim().length > length) {
      result = text.slice(0, length);
    }

    return `${result} ...`;
  };

  const typographyDetails = typographyMaker({ fontSize: 'Body_Medium', operatingSystem, isWeb: !breakPoint.laptop });

  return (
    <div className="w-full h-full flex flex-col justify-center lg:justify-start">
      <CustomLink href={`/${url}`}>
        <CustomTypography fontSize="Title_Small" tagType="h2">
          {title}
        </CustomTypography>
      </CustomLink>

      <div
        style={{ ...typographyDetails, color: COLORS_LIST.Surface_Outline }}
        dangerouslySetInnerHTML={{ __html: bodyShorter(body) }}
        className="pt-3 select-none hidden lg:block"
      />
    </div>
  );
};

export default memo(GeneratorScripts);
