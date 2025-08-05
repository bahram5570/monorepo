'use client';

import useOperatingSystem from '@hooks/useOperatingSystem';

import FooterInfo from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterInfo';
import FooterPages from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterPages';
import FooterSocials from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterSocials';
import FooterTrust from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterTrust';

const HomeFooter = () => {
  const { operatingSystem } = useOperatingSystem();

  if (operatingSystem === 'windows') {
    return <></>;
  }

  return (
    <div className="w-full px-4 mt-auto mb-10">
      <div className="w-full grid grid-cols-1 gap-14">
        <FooterInfo />
        <FooterPages />
        <FooterTrust />
      </div>

      <FooterSocials />
    </div>
  );
};

export default HomeFooter;
