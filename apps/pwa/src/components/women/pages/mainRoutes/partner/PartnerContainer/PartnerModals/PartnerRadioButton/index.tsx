import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';

import { LIST_LABEL } from './constants';
import { PartnerRadioButtonPropsType } from './type';

const PartnerRadioButton = ({ onChange, value }: PartnerRadioButtonPropsType) => {
  return (
    <div className="flex flex-col gap-2 items-end divide-y-[1px]">
      {LIST_LABEL.map((item, index) => {
        return (
          <div className="flex items-center justify-end gap-3 w-full" key={index}>
            <label htmlFor={item.name}>
              <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
                {item.name}
              </Typography>
            </label>
            <RadioButton isChecked={value === item.value} onClick={() => onChange(item.value)} />
          </div>
        );
      })}
    </div>
  );
};

export default PartnerRadioButton;
