import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import Button from '@components/ui/Button';

import { DatesContainerProps } from './types';

const DatesContainer = ({ children, description, subtitle, title, continueHandler }: DatesContainerProps) => {
  return (
    <div className="relative flex flex-col overflow-x-hidden h-[100dvh]">
      <ActivationBackBtn />
      <ActivationHeading scripts={{ description, subtitle, title }} />
      <>{children}</>

      <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
        <Button
          size="large"
          variant="fill"
          color="primary"
          onClick={continueHandler}
          navigationLoadingId="DatesContainer"
        >
          ادامه
        </Button>
      </div>
    </div>
  );
};

export default DatesContainer;
