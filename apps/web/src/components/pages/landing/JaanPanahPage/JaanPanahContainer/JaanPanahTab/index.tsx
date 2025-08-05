import CustomTypography from '@components/ui/CustomTypography';

import TabContainer from './TabContainer';
import { JaanPanahTabPropsType } from './type';

const JaanPanahTab = ({ result }: JaanPanahTabPropsType) => {
  return (
    <div className=" px-4 md:px-0 mt-auto   w-full  my-5">
      <CustomTypography
        className="mx-auto w-full flex justify-center items-center sm:mt-[30px] sm:mb-[30px] mt-[20px] mb-[30px]"
        fontSize="Title_Medium"
      >
        ما چطوری کمکت میکنیم؟
      </CustomTypography>
      <TabContainer result={result} />
    </div>
  );
};

export default JaanPanahTab;
