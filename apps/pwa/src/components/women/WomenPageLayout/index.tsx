import WomenPageLayoutHeader from './WomenPageLayoutHeader';
import { HEADER_HEIGHT } from './constants';
import { WomenPageLayoutProps } from './types';

const WomenPageLayout = (props: WomenPageLayoutProps) => {
  const headerProps = { ...props };
  delete headerProps.paddingBottom;
  delete headerProps.paddingTop;
  delete headerProps.className;
  delete headerProps.children;

  const paddingTop = typeof props.paddingTop === 'undefined' ? `${HEADER_HEIGHT + 16}px` : props.paddingTop;
  const paddingBottom = typeof props.paddingBottom === 'undefined' ? 0 : props.paddingBottom;

  return (
    <div
      style={{ paddingTop, paddingBottom, backgroundColor: props.backgroundColor }}
      className={`w-full min-h-[100dvh] flex flex-col ${props.className || {}}`}
    >
      <WomenPageLayoutHeader {...headerProps} />

      <>{props.children}</>
    </div>
  );
};

export default WomenPageLayout;
