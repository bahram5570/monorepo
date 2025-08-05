import Hamdel from '@assets/icons/hamdel.svg';

import Button from '@components/ui/Button';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { PartnerModalNameEnums } from './enums';

const AcceptModal = () => {
  const { colors } = useTheme();
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const id = getQueryParams('id');
  const partnerName = getQueryParams('partnerName');

  const onClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.TypeDistance,
      id: id || '',
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'typeRelationShip' }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-xs">
      <div
        className="w-10 h-10 flex justify-center items-center rounded-full"
        style={{
          backgroundColor: colors.PrimaryWoman_PrimaryContainer,
        }}
      >
        <Hamdel className="w-6 h-6 " style={{ stroke: colors.PrimaryWoman_Primary }} />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Typography scale="Title" size="Medium" textAlign="center">
          همدلی
        </Typography>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography scale="Body" size="Large" textAlign="center">
            {`با قبول کردن درخواست همدلی ${partnerName} اجازه دسترسی به قسمت های زیر رو بهش میدی`}
          </Typography>
          <div className="flex flex-col justify-center items-center">
            <Typography scale="Title" size="Small">
              .مشاهده وضعیت چرخه
            </Typography>
            <Typography scale="Title" size="Small">
              .مشاهده وضعیت بیوریتم
            </Typography>
          </div>

          <Typography scale="Body" size="Large" textAlign="center">
            لازمه بدونی پارتنرت به مشاوره‌های آنلاین و یادداشت‌هات هیچگونه دسترسی نداره
          </Typography>
        </div>

        <Button size="medium" variant="fill" color="primary" onClick={onClickHandler}>
          <Typography scale="Lable" size="Large" color="White">
            باشه
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default AcceptModal;
