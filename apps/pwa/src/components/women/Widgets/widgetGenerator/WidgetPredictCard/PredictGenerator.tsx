import EyeIcon from '@assets/icons/eye.svg';
import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { PredictGeneratorProps } from './types';

const PredictGenerator = (props: PredictGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      className=" rounded-lg divide-y-[1px] flex  flex-col justify-between items-center px-3 py-3 gap-2 "
      style={{ backgroundColor: colorFormatConverter(props.backgroundColor) }}
    >
      <div className="flex flex-row-reverse items-center gap-2 w-44">
        <CustomImage
          src={props.icon}
          width={45}
          className="border-[1px] rounded-full"
          style={{ borderColor: colors.Neutral_Background }}
        />
        <div className="flex flex-col justify-center items-end gap-2">
          <Typography scale="Lable" size="Large">
            {props.title}
          </Typography>
          <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
            {props.trailingUp}
          </Typography>
        </div>
      </div>

      <div
        className="w-full flex flex-col items-end pt-2  min-w-fit gap-1"
        // style={{ borderTop: `1px solid ${colors.Pink_100}` }}
      >
        {props.showEyeIcon && <EyeIcon className="w-6 h-auto" style={{ fill: props.eyeIconColor }} />}

        {!props.showEyeIcon && (
          <>
            <Typography scale="Body" size="Small" color="Surface_Outline">
              {props.trailingDown}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
};

export default PredictGenerator;
