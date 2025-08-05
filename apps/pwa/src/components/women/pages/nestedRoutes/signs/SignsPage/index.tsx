import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import SignsContainer from '../SignsContainer';
import SignsSkeleton from '../SignsSkeleton';
import TestKitModals from '../TestKitModals';
import useGetData from '../__hooks__/useGetData';

const SignsPage = () => {
  const { colors } = useTheme();
  const { isLoading, infoList } = useGetData();

  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="نشانه های امروز"
      headerBackgroundColor={colors.Surface_SurfaceVariant}
    >
      <>
        {isLoading && !infoList && <SignsSkeleton />}
        {infoList && (
          <>
            <SignsContainer infoList={infoList} />
            <TestKitModals />
          </>
        )}
      </>
    </WomenPageLayout>
  );
};

export default SignsPage;
