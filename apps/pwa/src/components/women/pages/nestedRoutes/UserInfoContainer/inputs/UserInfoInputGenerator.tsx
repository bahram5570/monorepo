import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import UserInfoBtnModal from './UserInfoBtnModal';
import { UserInfoInputGeneratorPropsType } from './type';

const UserInfoInputGenerator = ({
  changeValueHandler,
  description,
  isLastItem,
  inputType,
  label,
  value,
  index,
  name,
}: UserInfoInputGeneratorPropsType) => {
  const { colors, typography } = useTheme();

  return (
    <div
      className=" p-2"
      style={{ borderBottom: `${isLastItem === index ? '0' : `1px solid ${colors.Neutral_Surface}`}` }}
    >
      <div className="flex flex-col gap-2 items-end">
        <div className="flex flex-col items-end">
          <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
            {label}
          </Typography>

          <Typography scale="Body" size="Small" color="Surface_Outline">
            {description}
          </Typography>
        </div>

        {inputType === 'input' ? (
          <input
            type="text"
            value={value}
            className="w-full"
            onChange={(v) => changeValueHandler(v.target.value, name)}
            style={{ color: colors.Surface_OnSurfaceVariant, ...typography.Body.Large }}
          />
        ) : (
          <UserInfoBtnModal name={name} value={value} />
        )}
      </div>
    </div>
  );
};

export default UserInfoInputGenerator;
