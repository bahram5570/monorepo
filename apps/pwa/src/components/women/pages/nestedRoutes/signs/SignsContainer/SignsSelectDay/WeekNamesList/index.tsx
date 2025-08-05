import Typography from '@components/ui/Typography';

import useUpdateWeekNamesList from './__hooks__/useUpdateWeekNamesList';
import { WeekNamesListProps } from './types';

const WeekNamesList = ({ infoList, slide }: WeekNamesListProps) => {
  const { updatedList } = useUpdateWeekNamesList(infoList);
  const updatedSlide = slide + 1;

  return (
    <div className="w-full grid grid-cols-3">
      {updatedList && (
        <>
          <Typography
            scale="Body"
            size="Medium"
            textAlign="center"
            className="mr-auto"
            color={updatedSlide >= infoList.length ? 'Transparent' : 'Surface_Outline'}
          >
            {updatedList[updatedSlide + 1]}
          </Typography>

          <Typography scale="Title" size="Small" textAlign="center" className="mx-auto">
            {updatedList[updatedSlide]}
          </Typography>

          <Typography
            scale="Body"
            size="Medium"
            textAlign="center"
            className="ml-auto"
            color={updatedSlide <= 1 ? 'Transparent' : 'Surface_Outline'}
          >
            {updatedList[updatedSlide - 1]}
          </Typography>
        </>
      )}
    </div>
  );
};

export default WeekNamesList;
