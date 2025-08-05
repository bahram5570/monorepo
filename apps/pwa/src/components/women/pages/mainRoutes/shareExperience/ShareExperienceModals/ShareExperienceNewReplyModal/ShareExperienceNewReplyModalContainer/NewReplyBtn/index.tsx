import Button from '@components/ui/Button';

import { NewReplyBtnProps } from './types';

const NewReplyBtn = ({ text, isLoading, submitHandler }: NewReplyBtnProps) => {
  const isDisable = text.trim().length < 1;

  return (
    <div className="mt-auto px-4 py-6">
      <Button
        size="small"
        variant="fill"
        color="primary"
        className="!w-fit"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={submitHandler}
      >
        پست کردن
      </Button>
    </div>
  );
};

export default NewReplyBtn;
