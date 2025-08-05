import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { CustomLinkPropType } from './type';

const CustomLink = (props: CustomLinkPropType) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { colors } = useTheme();

  const {
    link,
    style,
    lable,
    id,
    labelSize = 'Large',
    labelColor = 'PrimaryWoman_Primary',
    color = colors.PrimaryWoman_Primary,
    backgroundColor = colors.PrimaryWoman_PrimaryContainer,
  } = props;

  const isLoading = pageNavigationLoading === id;

  return (
    <Link
      href={link}
      style={{
        ...style,
        backgroundColor,
        color,
      }}
      className="font-semibold w-full h-10 text-base rounded-full flex justify-center items-center"
      onClick={() => pageNavigationHandler({ id: id, showProgressBar: false })}
    >
      {isLoading && <Spinner width={20} color="primary" />}
      {!isLoading && (
        <Typography scale="Lable" size={labelSize} color={labelColor}>
          {lable}
        </Typography>
      )}
    </Link>
  );
};

export default CustomLink;
