import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { UserInfoRadioBtnGeneratorPropsType } from './type';

const UserInfoRadioBtnGenerator = ({
  description,
  label,
  name,
  listLabel,
  value,
  changeValueHandler,
}: UserInfoRadioBtnGeneratorPropsType) => {
  const { colors } = useTheme();
  const isLastItem = listLabel.length - 1;
  return (
    <div className=" p-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-end">
          <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
            {label}
          </Typography>
          <Typography scale="Body" size="Small" color="Surface_Outline">
            {description}
          </Typography>
        </div>

        <div className="flex flex-col gap-2 items-end">
          {listLabel.map((item, index) => {
            return (
              <div
                className="flex items-center justify-end gap-3 w-full pb-4"
                key={index}
                style={{ borderBottom: `${isLastItem === index ? '0' : `1px solid ${colors.Neutral_Surface}`}` }}
              >
                <label htmlFor={item.name}>{item.name}</label>
                <input
                  type="radio"
                  id={item.name}
                  value={item.value}
                  onChange={(v) => {
                    changeValueHandler(Number(v.target.value), name);
                  }}
                  checked={value === item.value}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfoRadioBtnGenerator;
