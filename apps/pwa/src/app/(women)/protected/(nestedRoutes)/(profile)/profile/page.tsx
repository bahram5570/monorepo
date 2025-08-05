'use client';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/women/pages/nestedRoutes/profile/ProfileContainer'),
  {
    ssr: false,
  },
);

const Profile = () => {
  return <DynamicComponentWithNoSSR />;
};

export default Profile;
