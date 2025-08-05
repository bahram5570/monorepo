import StarIcon from '@assets/icons/star.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import SpecialistCommentsGenerator from './SpecialistCommentsGenerator';
import { SpecialistCommentsListProps } from './types';

const SpecialistCommentsList = ({ commentsData }: SpecialistCommentsListProps) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col items-end gap-2 pt-7">
      <Typography scale="Title" size="Small">
        نظرات کاربران
      </Typography>

      {commentsData.map((item, index) => (
        <div
          className="w-full flex flex-col items-end p-4 rounded-xl"
          style={{ backgroundColor: colors.Surface_SurfaceVariant }}
          key={index}
        >
          <div className="flex justify-between w-full pb-2">
            <div className="grid grid-cols-3">
              <Typography scale="Title" size="Small" color="Surface_InverseSurface" className="mx-auto">
                {item.rate.toString()}
              </Typography>

              <StarIcon className="w-5 h-auto" style={{ fill: colors.Yellow }} />

              <div className="w-[1px] h-5 m-auto " style={{ backgroundColor: colors.Surface_OutlineVariant }} />
            </div>

            <Typography scale="Lable" size="Large">
              {item.userName}
            </Typography>
          </div>

          <Typography scale="Body" size="Small">
            {item.descritpion}
          </Typography>

          <div className="w-full h-[1px] mt-3 mb-1" style={{ backgroundColor: colors.Neutral_Surface }} />

          <SpecialistCommentsGenerator isPositive={true} scripts={item.positives} />

          <SpecialistCommentsGenerator isPositive={false} scripts={item.negatives} />
        </div>
      ))}
    </div>
  );
};

export default SpecialistCommentsList;
