import { generateLinearGradient } from './utils';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CustomLink from '../CustomLink';
import { PartnerCardPropsType } from './type';

const PartnerCard = ({ partner, valid }: PartnerCardPropsType) => {
  const { colors } = useTheme();

  return (
    <div
      className="flex flex-col gap-4 py-6 px-4 rounded-xl  items-end"
      style={{ border: `1px solid ${colors.Neutral_Surface} ` }}
    >
      {partner.cycleTitle && (
        <div className="flex justify-between items-end ">
          <Typography scale="Title" size="Small">
            {partner.cycleTitle}
          </Typography>
        </div>
      )}

      <div
        className={`divide-y-[1px] divide-opacity-20 flex flex-col ${!valid ? 'py-5' : 'py-4'} px-4  items-center rounded-[18px]  w-full`}
        style={{
          background: `${partner.cycleCard?.gradient.length > 0 ? generateLinearGradient(partner.cycleCard?.gradient) : `#fff`} `,
        }}
      >
        <div className=" flex flex-row gap-2  sm:px-4 py-3  items-center rounded-xl  w-full mb-2">
          <div className="w-full flex flex-col gap-2 items-end">
            <div className="flex flex-col gap-2 items-end">
              <Typography scale="Body" size="Medium" color="White" textAlign="center">
                {partner.cycleCard.title}
              </Typography>
              <Typography scale="Headline" size="Small" color="White" textAlign="center">
                {partner.cycleCard.subTitle}
              </Typography>
            </div>
            {/* {valid && (
              <CustomLink
                labelColor="PrimaryWoman_OnPrimary"
                backgroundColor={colors.Pink_500}
                color=""
                lable={partner.cycleCard.buttonText}
                style={{ width: 'fit-content', padding: '1em' }}
                labelSize="Medium"
                link={valid ? '/protected/calendar' : '/protected/partner/start'}
              />
            )} */}
          </div>
          {partner.cycleCard.image && <CustomImage src={partner.cycleCard.image} className="min-w-[60px] " />}
        </div>

        {partner.cycleCard.trailing && (
          <Typography scale="Title" size="Medium" color="White" className="w-full pt-3" textAlign="center">
            {partner.cycleCard.trailing}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
