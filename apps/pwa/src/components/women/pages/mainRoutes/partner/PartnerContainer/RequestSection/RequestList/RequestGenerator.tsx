import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { PartnerModalNameEnums } from '../../PartnerModals/enums';
import { RequestGeneratorTypeProps } from './type';

const RequestGenerator = ({ item }: RequestGeneratorTypeProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === item.name;

  const onAcceptClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.Accept,
      partnerName: item.name,
      id: item.id,
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'Accept' }));
  };

  const onRejectClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.Reject,
      partnerName: item.name,
      id: item.id,
      isRecv: item.isRecv ? String(item.isRecv) : '',
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'Reject' }));
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-end gap-2">
        <Typography scale="Lable" size="Medium">
          {!item.isRecv ? `درخواست به ${item.name}` : `${item.name}`}
        </Typography>
        <CustomImage
          src={item.image || '/assets/images/man.webp'}
          width="48px"
          height="48px"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center gap-3">
        {item.isRecv && (
          <Button
            size="medium"
            variant="fill"
            color="primary"
            onClick={onAcceptClickHandler}
            fullWidth={false}
            isLoading={isLoading}
          >
            <Typography scale="Lable" size="Medium" color="PrimaryWoman_OnPrimary">
              قبول کردن
            </Typography>
          </Button>
        )}

        {!item.isRecv && (
          <div className="w-fit rounded-full px-4 h-10" style={{ backgroundColor: colors.Neutral_Surface }}>
            <div className="flex justify-center items-center h-full">
              <Typography scale="Lable" size="Medium" color="Surface_Outline">
                در انتظار...
              </Typography>
            </div>
          </div>
        )}

        <Button
          size="medium"
          variant="outline"
          color="FREE-STYLES"
          buttonColor={colors.Surface_OutlineVariant}
          contentsColor=""
          onClick={onRejectClickHandler}
          fullWidth={false}
          isLoading={isLoading}
          style={{ border: `1px solid ${colors.Neutral_Surface}` }}
        >
          <Typography scale="Lable" size="Medium" color="Neutral_OnSurface">
            {item.isRecv ? 'رد کردن' : 'لغو کردن'}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default RequestGenerator;
