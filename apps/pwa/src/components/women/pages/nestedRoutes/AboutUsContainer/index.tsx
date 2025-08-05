import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import LinkGenerator from './LinkGenerator';
import { LINK_SOCIAL_LIST } from './constants';

const AboutUsContainer = () => {
  const { colors } = useTheme();
  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="درباره ما"
      backgroundColor={colors.Grey_50}
      headerBackgroundColor={colors.Grey_50}
      className="flex flex-col items-center justify-center gap-6 relative z-0 "
    >
      <div className="flex flex-col justify-center items-center w-3/4 gap-9">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <Typography scale="Headline" size="Large" color="PrimaryWoman_Primary">
                Impo
              </Typography>
              <div className="flex flex-col items-center justify-center">
                <Typography scale="Lable" size="Large" color="Surface_OnSurfaceVariant">
                  از دل این جمله بیرون اومده
                </Typography>
                <Typography scale="Headline" size="Medium" color="PrimaryWoman_Primary">
                  I am important
                </Typography>
                <Typography scale="Lable" size="Large" color="Surface_OnSurfaceVariant">
                  یعنی من مهم هستم
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
              ایمپو در کنار شماست تا هر روز بهتون یادآوری کنه که باید بیشتر حواستون به خودتون باشه.
            </Typography>
            <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
              اینجاییم که با خودمون در صلح باشیم و سبک زندگیمون رو با تغییر نگرشمون تغییر بدیم
            </Typography>
            <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
              اینو یادت نره تو خیلی مهم و ارزشمندی!
            </Typography>
          </div>
        </div>

        <div className="flex flex-row ">
          {LINK_SOCIAL_LIST.map((item, index) => {
            return <LinkGenerator {...item} key={index} />;
          })}
        </div>
      </div>
    </WomenPageLayout>
  );
};

export default AboutUsContainer;
