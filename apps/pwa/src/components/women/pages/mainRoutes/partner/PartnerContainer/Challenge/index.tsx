import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import CustomLink from '../CustomLink';
import LinkGenerator from './LinkGenerator';
import useGetNotReadMessage from './__hooks__/useGetNotReadMessage';
import useUpdateLinkList from './__hooks__/useUpdatedLinkList';
import { ChallengePropsType } from './type';
import { buttonLinkHandler } from './utilis';

const Challenge = ({ card, valid, button }: ChallengePropsType) => {
  const { updatedPartnerLinkList } = useUpdateLinkList(button);
  const { MessageNumber } = useGetNotReadMessage({ valid });

  return (
    <div className="mt-20 flex flex-col gap-3">
      {valid && (
        <div className="flex flex-row-reverse justify-center items-center gap-3">
          {updatedPartnerLinkList.map((link, index) => {
            return (
              <LinkGenerator
                {...link}
                MessageNumber={(MessageNumber && MessageNumber.count) || undefined}
                key={index}
              />
            );
          })}
        </div>
      )}

      {card.btnText || card.text ? (
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl shadow-sm">
          <div className="flex justify-center items-center px-2">
            <CustomImage src={card.leftIcon} style={{ scale: !valid ? '2' : 'inherit' }} />
            <div className="px-3">
              <Typography scale="Lable" size="Large" textAlign="center" className="p-2">
                {card.text}
              </Typography>
            </div>

            {card.rightIcon !== '' && <CustomImage src={card.rightIcon} />}
          </div>
          {card.btnText && (
            <CustomLink lable={card.btnText} link={buttonLinkHandler(card.link)} id={`Challenge-${card.btnText}`} />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Challenge;
