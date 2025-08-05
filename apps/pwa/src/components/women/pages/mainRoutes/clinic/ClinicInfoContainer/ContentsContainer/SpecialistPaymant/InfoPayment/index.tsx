import { addCommas } from '@utils/numbers';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { InfoPaymentProps } from './types';

const InfoPayment = ({ currentValue, discountPrice, payPrice, price, priceUnit }: InfoPaymentProps) => {
  const { colors } = useTheme();

  const pricesHandler = (script: string, value: number) => (
    <div className="w-full flex items-center justify-between">
      <Typography scale="Lable" size="Medium">
        {`${addCommas(value)} ${priceUnit}`}
      </Typography>

      <Typography scale="Body" size="Medium">
        {script}
      </Typography>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <Typography scale="Title" size="Small">
        اطلاعات پرداخت
      </Typography>

      <div
        className="w-full px-2 py-4 rounded-xl flex flex-col gap-2 border-[1px]"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        {pricesHandler('هزینه مشاوره', price)}
        {pricesHandler('تخفیف', discountPrice)}
        {pricesHandler('اعتبار شما', currentValue)}

        <div className="w-full h-[1px] my-1" style={{ backgroundColor: colors.Neutral_Surface }} />
        {pricesHandler('قابل پرداخت', payPrice)}
      </div>
    </div>
  );
};

export default InfoPayment;
