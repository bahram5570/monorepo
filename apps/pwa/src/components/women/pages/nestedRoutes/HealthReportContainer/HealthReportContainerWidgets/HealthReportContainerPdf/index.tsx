import ImpoIcon from '@assets/icons/impoName.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WidgetGenerator from '@components/women/Widgets/widgetGenerator';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';
import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import HealthReportDate from './HealthReportDate';
import usePdfDownload from './__hooks__/usePdfDownload';
import { HealthReportContainerPdfProps } from './types';

const HealthReportContainerPdf = ({ data, backgroundColor }: HealthReportContainerPdfProps) => {
  const { colors } = useTheme();
  const { ref, downloadStatus, downloadStatusHandler } = usePdfDownload();

  const PeriodReportType = data.widgets.find((widget) => widget.type === WidgetsEnum.PeriodReportCard);
  const NotData = PeriodReportType?.data.items.length === undefined || PeriodReportType?.data.items.length < 3;

  return (
    <>
      <div
        className="w-full mt-auto py-4 fixed bottom-0 left-0 right-0 mx-auto  z-50 px-4 flex justify-center items-center "
        style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
      >
        <Button
          size="medium"
          variant="fill"
          color="primary"
          isDisable={NotData}
          isLoading={downloadStatus !== null}
          onClick={() => downloadStatusHandler('preparing')}
        >
          دریافت pdf گزارش سلامت
        </Button>
      </div>

      {downloadStatus !== null && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 -z-40 bg-white" />

          <div className="fixed top-0 left-0 right-0 bottom-0 w-full -z-50" style={{ backgroundColor }}>
            <div
              ref={ref}
              style={{ backgroundColor }}
              className="min-w-[210mm] max-w-[210mm] h-fit min-h-[297mm] px-8 py-6"
            >
              <div
                className="w-full flex justify-between items-center border-b-[1px] pb-4 mb-4"
                style={{ borderBottomColor: colors.Neutral_Surface }}
              >
                <Typography scale="Lable" size="Small" color="Surface_Outline">
                  Impo.app
                </Typography>

                <div className="flex items-center gap-2">
                  <Typography scale="Lable" size="Small">
                    بزرگترین پلتفرم حوزه سلامت قاعدگی زنان
                  </Typography>

                  <ImpoIcon className="w-[72px] h-auto" />
                </div>
              </div>

              <div className="w-full flex flex-col items-end pb-4">
                <Typography scale="Headline" size="Medium">
                  {` گزارش دوره ${PeriodReportType?.data?.items?.length} ماهه پریود`}
                </Typography>

                {data && <HealthReportDate data={data} />}
              </div>

              <div className="w-full flex flex-col items-end pb-6">
                <Typography scale="Body" size="Large">
                  این گزارش نشون دهنده زمان های پیش بینی شده و اتفاق افتاده پریود شماست.
                </Typography>

                <Typography scale="Body" size="Large">
                  میتونی این گزارش رو برای خودت ذخیره کنی و یا برای پزشکت بفرستی.
                </Typography>
              </div>

              <div className="w-full flex flex-col gap-4">
                {data.widgets.map((widget, index) => (
                  <WidgetGenerator {...widget} isPdfDownloading={true} key={`pdf-${index}`} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HealthReportContainerPdf;
