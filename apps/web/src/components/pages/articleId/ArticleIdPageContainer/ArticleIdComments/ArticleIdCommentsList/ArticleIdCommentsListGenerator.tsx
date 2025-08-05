import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import ArrowIcon from '@assets/icons/arrow3.svg';
import CustomTypography from '@components/ui/CustomTypography';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import { ArticleIdCommentsListGeneratorTypes } from './types';

const ArticleIdCommentsListGenerator = (props: ArticleIdCommentsListGeneratorTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const messageTypography = typographyMaker({ fontSize: 'Body_Large', operatingSystem, isWeb: !breakPoint.laptop });
  const replyTypography = typographyMaker({ fontSize: 'Body_Large', operatingSystem, isWeb: !breakPoint.laptop });

  const htmlConvertor = (txt: string) => {
    return txt.trim().replaceAll(/(https?:\/\/[^\s"]+)/g, `<br /> <a style='color: #EC407A' href='$1'>$1</a>`);
  };

  return (
    <div
      className="w-full flex flex-col gap-4 py-5 border-t-[1px]"
      style={{ borderTopColor: props.isFirstIndex ? COLORS_LIST.Transparent : COLORS_LIST.Neutral_Surface }}
    >
      <CustomTypography fontSize="Lable_Large" color={'Surface_Outline'}>
        {props.name}
      </CustomTypography>

      <div style={{ ...messageTypography }} dangerouslySetInnerHTML={{ __html: htmlConvertor(props.message) }} />

      {props.reply.valid && props.reply.message.trim().length > 0 && (
        <div
          className="w-full px-4 md:px-6 py-5 rounded-2xl"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        >
          <div className="w-fit flex items-center gap-4 pb-2">
            <CustomTypography fontSize="Lable_Large" color={'Surface_OnSurfaceVariant'}>
              پشتیبانی ایمپو
            </CustomTypography>

            <ArrowIcon className="w-6" style={{ stroke: COLORS_LIST.Surface_Outline }} />
          </div>

          <div
            className="break-words"
            style={{ ...replyTypography }}
            dangerouslySetInnerHTML={{ __html: htmlConvertor(props.reply.message) }}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleIdCommentsListGenerator;
