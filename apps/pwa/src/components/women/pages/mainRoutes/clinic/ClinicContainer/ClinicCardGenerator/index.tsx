import { addCommas } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { ClinicCardGeneratorProps } from './types';

const ClinicCardGenerator = ({ description, id, image, name, price, priceUnit }: ClinicCardGeneratorProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const clickHandler = () => {
    pageNavigationHandler({ showProgressBar: true, linkTo: `clinic/doctor/${id}`, id: 'ClinicCardGenerator' });
  };

  return (
    <div onClick={clickHandler} className="cursor-pointer">
      <div
        className="w-full h-fit px-3 py-4 rounded-xl flex items-center gap-2 pointer-events-none "
        style={{ backgroundColor: colors.Surface_SurfaceVariant }}
      >
        <CustomImage src={image} width={90} height={90} />

        <div className="w-full flex flex-col items-end gap-1">
          <Typography scale="Title" size="Small">
            {name}
          </Typography>

          <Typography scale="Body" size="Small">
            {description}
          </Typography>

          <Typography scale="Lable" size="SmallProminet">
            {`${addCommas(price)} ${priceUnit}`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ClinicCardGenerator;
