import CalendarArrow from '@assets/icons/calendarArrow.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { TicketLinkGeneratorPropsType } from './type';

const TicketLinkGenerator = ({ id, title }: TicketLinkGeneratorPropsType) => {
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { colors } = useTheme();

  const handleGetData = (id: string) => {
    const custom = getQueryParams('id');
    const newQuery = custom ? `${custom}-${id}` : id;
    newQueryParamsHandler({ id: newQuery });
  };

  const clickHandler = () => {
    handleGetData(id);
    pageNavigationHandler({ showProgressBar: true, id: 'ticketLinkGenerator' });
  };

  return (
    <div className="bg-white  p-4 rounded-xl w-full cursor-pointer">
      <div onClick={clickHandler}>
        <div className=" flex flex-row justify-between items-center p-2">
          <CalendarArrow style={{ stroke: colors.Surface_Outline }} className="w-4 h-4" />
          <Typography scale="Body" size="Small" color="Surface_Outline">
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TicketLinkGenerator;
