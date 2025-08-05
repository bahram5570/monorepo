'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';

const GoToAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <WomenPageLayout rightElement="BackButton" headerBackgroundColor="transparent" paddingTop={100}>
      {children}
    </WomenPageLayout>
  );
};

export default GoToAppLayout;
