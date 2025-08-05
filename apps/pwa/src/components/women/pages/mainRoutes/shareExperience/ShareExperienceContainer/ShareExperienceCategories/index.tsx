import SaveEmptyIcon from '@assets/icons/saveEmpty.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ShareExperienceCategoriesProps } from './types';

const ShareExperienceCategories = ({
  selectedCategoryIdHandler,
  selectedCategoryId,
  categories,
}: ShareExperienceCategoriesProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex flex-col py-4">
      <CustomSlider gap={12} sidePadding={16}>
        <>
          {categories.map((item, index) => {
            const isSelected = selectedCategoryId === item.id;

            return (
              <div
                key={index}
                onClick={() => selectedCategoryIdHandler(item.id)}
                className="flex items-center justify-center gap-1 border-[1px] rounded-full py-2 px-[18px] min-w-fit cursor-pointer"
                style={{
                  borderColor: isSelected ? colors.Neutral_OnBackground : colors.Neutral_Surface,
                  backgroundColor: isSelected ? colors.Neutral_OnBackground : colors.White,
                }}
              >
                <Typography scale="Body" size="Medium" color={isSelected ? 'White' : 'Neutral_OnBackground'}>
                  {item.title}
                </Typography>

                {item.icon.trim().length > 0 &&
                  // <CustomImage
                  //   src={item.icon}
                  //   width={16}
                  //   style={{ color: isSelected ? colors.White : colors.Neutral_OnBackground }}
                  // />
                  (isSelected ? (
                    <SaveEmptyIcon className="w-4" style={{ stroke: colors.White }} />
                  ) : (
                    <SaveEmptyIcon className="w-4" style={{ stroke: colors.Surface_InverseSurface }} />
                  ))}
              </div>
            );
          })}
        </>
      </CustomSlider>
    </div>
  );
};

export default ShareExperienceCategories;
