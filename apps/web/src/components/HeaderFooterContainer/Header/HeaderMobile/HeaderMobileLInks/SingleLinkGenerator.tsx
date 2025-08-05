import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { SingleLinkGeneratorTypes } from './types';

const SingleLinkGenerator = ({ linkTo, title, closeHandler }: SingleLinkGeneratorTypes) => {
  return (
    <CustomLink href={linkTo} onClick={closeHandler} className="flex items-center h-14 hover:!opacity-100">
      <CustomTypography fontSize="Body_Medium" color={'Surface_InverseSurface'}>
        {title}
      </CustomTypography>
    </CustomLink>
  );
};

export default SingleLinkGenerator;
