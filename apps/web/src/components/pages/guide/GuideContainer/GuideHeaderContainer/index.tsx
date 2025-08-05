import ArrowIcon from '@assets/icons/arrowRight.svg';
import GreenSquareIcon from '@assets/icons/square-green.svg';
import SquareTickIcon from '@assets/icons/square-tick.svg';
import SquareIcon from '@assets/icons/square.svg';
import StartIcon from '@assets/icons/start.svg';
import CustomTypography from '@components/ui/CustomTypography';

import { GuideHeaderContainerPropsType } from './type';

const GuideHeaderContainer = ({ currentStep, prevStep, stepList }: GuideHeaderContainerPropsType) => {
  return (
    <div className="grid items-center grid-cols-[auto,1fr] gap-4">
      <div onClick={prevStep} className={`${currentStep === 0 ? 'opacity-30' : 'opacity-100'} my-4`}>
        <ArrowIcon />
      </div>

      <ul className="flex justify-center items-center gap-[5px] my-4">
        {stepList.map((step, index) => (
          <>
            <li className="grid justify-center relative" key={index}>
              {index === currentStep && <GreenSquareIcon />}
              {index === 0 && index < currentStep && <StartIcon />}
              {index !== 0 && index < currentStep && <SquareTickIcon />}
              {index > currentStep && <SquareIcon />}

              {index === currentStep && (
                <CustomTypography
                  className="absolute -right-1 top-[35px] "
                  style={{ width: 'max-content' }}
                  tagType="span"
                  fontSize="Lable_Small"
                >
                  {step.name}
                </CustomTypography>
              )}
            </li>
            <span className="w-full h-[2px] rounded-[50px] last:hidden " style={{ background: '#efefef' }}></span>
          </>
        ))}
      </ul>
    </div>
  );
};

export default GuideHeaderContainer;
