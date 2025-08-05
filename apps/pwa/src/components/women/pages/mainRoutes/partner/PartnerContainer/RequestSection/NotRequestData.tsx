import AddLoveIcon from '@assets/icons/add-love.svg';

import Typography from '@components/ui/Typography';

import CustomLink from '../CustomLink';

const NotRequestData = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <AddLoveIcon />
      <Typography scale="Body" size="Small" color="Neutral_OnBackground" textAlign="center" className="p-3">
        هنوز هیچکس برات درخواست همدلی نفرستاده! اما خودت می‌تونی همدلی رو شروع کنی
      </Typography>
      <CustomLink lable="شروع همدلی" link="/protected/partner/start" id="not-request-data-link" />
    </div>
  );
};

export default NotRequestData;
