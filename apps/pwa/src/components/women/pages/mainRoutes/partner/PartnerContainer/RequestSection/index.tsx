import Refresh from '@assets/icons/refresh.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import NotRequestData from './NotRequestData';
import RequestList from './RequestList';
import RequestListSkeleton from './RequestList/RequestListSkeleton';
import useGetData from './__hooks__/useGetData';

const RequestSection = () => {
  const { colors } = useTheme();
  const { data, getData, isLoading } = useGetData();
  const hadData = data && data?.list.length > 0;

  return (
    <div
      className="bg-white flex flex-col gap-4 p-3 rounded-xl "
      style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <div className="flex justify-between items-center ">
        <div onClick={getData}>
          <Refresh className="w-10 h-10" />
        </div>

        <Typography scale="Title" size="Small">
          {hadData ? 'درخواست های همدلی' : ' درخواست ها'}
        </Typography>
      </div>
      {isLoading && <RequestListSkeleton />}

      {!isLoading && hadData && <RequestList data={data} />}
      {!isLoading && !hadData && <NotRequestData />}
    </div>
  );
};

export default RequestSection;
