import Button from '@components/ui/Button';
import { useRouter } from 'next/navigation';

import { EditIdentyLinkProps } from './types';

const EditIdentyLink = ({ isPhone }: EditIdentyLinkProps) => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className="w-fit">
      <Button variant="fill" size="medium" color="pink" onClick={backHandler}>
        ویرایش {isPhone ? 'شماره' : 'ایمیل'}
      </Button>
    </div>
  );
};

export default EditIdentyLink;
