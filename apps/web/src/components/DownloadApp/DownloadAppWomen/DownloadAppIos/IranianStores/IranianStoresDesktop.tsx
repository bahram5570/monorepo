import CustomTypography from '@components/ui/CustomTypography';

import DownloadAppLinkGenerator from '../../DownloadAppLinkGenerator';
import { IRANIAN_STORES_LIST } from '../constants';

const IranianStoresDesktop = () => {
  return (
    <>
      {IRANIAN_STORES_LIST.map((item, index) => (
        <DownloadAppLinkGenerator id={item.id} href={item.linkTo} key={index}>
          <div className="flex items-center w-full gap-[10px] pr-9">
            {item.icon}

            <CustomTypography fontSize="Lable_Medium" color={'Neutral_OnSurface'}>
              {item.title}
            </CustomTypography>
          </div>
        </DownloadAppLinkGenerator>
      ))}
    </>
  );
};

export default IranianStoresDesktop;
