import Button from '@components/ui/Button';

import { NameSelectorActivationCardProps } from './types';

const NameSelectorActivationCard = ({
  children,
  onClick,
  btnText,
  isLoading,
  isDisable,
}: NameSelectorActivationCardProps) => {
  return (
    <div
      style={{ backgroundColor: '#ffffffdd' }}
      className="w-full h-fit min-h-[520px] flex flex-col py-8 px-3 rounded-2xl mt-6"
    >
      <>{children}</>

      <div className="w-full flex justify-center pt-5 mt-auto">
        <Button
          size="large"
          variant="fill"
          onClick={onClick}
          color="onBackground"
          isLoading={isLoading}
          isDisable={isDisable}
          className="!w-[206px]"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default NameSelectorActivationCard;
