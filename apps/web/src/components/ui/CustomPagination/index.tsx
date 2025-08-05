import useOperatingSystem from '@hooks/useOperatingSystem';

import { Pagination, PaginationItem } from '@mui/material';

import { toPersianNumbers } from '@utils/numbers';

import { typographyMaker } from '../CustomTypography/__utils__';
import { CustomPaginationTypes } from './types';

const CustomPagination = ({
  fontSize = 'Body_Small',
  size = 'medium',
  pageHandler,
  totalPage,
  className,
  style,
  page,
}: CustomPaginationTypes) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyDetails = typographyMaker({ fontSize, operatingSystem, isWeb: true });

  const selectHandler = (_: unknown, p: number) => {
    pageHandler(p);
  };

  return (
    <div className={`${className}`} style={style}>
      <Pagination
        size={size}
        page={page}
        count={totalPage}
        showLastButton={true}
        showFirstButton={true}
        onChange={selectHandler}
        renderItem={(item) => (
          <PaginationItem {...item} style={{ ...typographyDetails }} page={toPersianNumbers(item.page || 1)} />
        )}
      />
    </div>
  );
};

export default CustomPagination;
