import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { BloodPressureListPropsType, CheckBloodPressureStatusType, InitailBloodPressureContextType } from './type';

const BloodPressureListContainer = ({ bloodPressureList }: BloodPressureListPropsType) => {
  const { colors } = useTheme();

  const hasData = bloodPressureList && bloodPressureList.length > 0;

  const checkBloodPressure: CheckBloodPressureStatusType = (high, low) => {
    let result: keyof InitailBloodPressureContextType = 'normal';

    if (high && low !== undefined && high <= 140 && low <= 90) {
      result = 'normal';
    } else {
      result = 'danger';
    }
    return result;
  };

  const initailBloodPressureContext: InitailBloodPressureContextType = {
    normal: {
      text: 'میزان فشار خونت نرماله. مثل همیشه مراقب خودت باش!',
      border: colors.Success_Success,
      result: 'فشار خون نرمال',
    },

    danger: {
      text: ' میزان فشار خونت بالاتر از حد نرماله. حتما برای کنترلش تحت نظر پزشک باش!',
      border: colors.Error_Error,
      result: 'فشار خون غیرنرمال',
    },
  };

  if (!hasData) {
    <></>;
  }

  return (
    <>
      {hasData && (
        <div className="flex flex-col gap-4 p-2">
          {bloodPressureList &&
            bloodPressureList.map((bloodPressure, index) => {
              const result: keyof InitailBloodPressureContextType = checkBloodPressure(
                bloodPressure.high,
                bloodPressure.low,
              );
              const context = initailBloodPressureContext[result];
              const bloodPressureValue = `${bloodPressure.high}/${bloodPressure.low}`;

              return (
                <div
                  className={`flex flex-col rounded-md items-end ${index === 0 ? 'mt-3' : ''}`}
                  key={index}
                  style={{
                    border: `1px solid ${context.border}`,
                  }}
                >
                  <div
                    style={{
                      background: context.border,
                    }}
                    className="p-2  rounded-bl-md"
                  >
                    <Typography scale="Lable" size="Small" color="White">
                      {`نتیجه تست ${index + 1} :${bloodPressureValue}mmHg- ${context.result}`}
                    </Typography>
                  </div>
                  <div className="p-2">
                    <Typography scale="Body" size="Small">
                      {`${context.text}`}
                    </Typography>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default BloodPressureListContainer;
