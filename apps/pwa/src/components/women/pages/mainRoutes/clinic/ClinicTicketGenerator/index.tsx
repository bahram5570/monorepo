import useTheme from '@hooks/useTheme';

import { ClinicStateEnums } from '../enumbs';
import TicketArrow from './TicketArrow';
import TicketBigLabel from './TicketBigLabel';
import TicketDoctor from './TicketDoctor';
import TicketSmallLabel from './TicketSmallLabel';
import TicketTime from './TicketTime';
import { ClinicTicketGeneratorProps } from './types';
import useClinicTicketNavigation from './useClinicTicketNavigation';

const ClinicTicketGenerator = (props: ClinicTicketGeneratorProps) => {
  const { colors } = useTheme();
  const { navigateTicketHandler } = useClinicTicketNavigation(props);

  const showArrow =
    ClinicStateEnums.NeedYourAnswer === props.state || (ClinicStateEnums.Closed === props.state && props.rate === 0);

  return (
    <div className="w-full cursor-pointer" onClick={navigateTicketHandler}>
      <div
        className="w-full px-2 py-3 rounded-xl  pointer-events-none"
        style={{ backgroundColor: props.stylingTypes === 'heading' ? colors.Pink_500 : colors.Surface_SurfaceVariant }}
      >
        <div className="flex items-center justify-between">
          {!showArrow && <TicketArrow stylingTypes={props.stylingTypes} />}

          {showArrow && (
            <div className="flex flex-col justify-between gap-1">
              <div style={{ opacity: props.state === ClinicStateEnums.Closed ? '1' : '0' }}>
                <TicketSmallLabel stylingTypes={props.stylingTypes} state={props.state} rate={props.rate} />
              </div>

              <TicketTime createTime={props.createTime} stylingTypes={props.stylingTypes} />
            </div>
          )}

          <TicketDoctor
            drName={props.drName}
            drImage={props.drImage}
            drSpeciality={props.drSpeciality}
            stylingTypes={props.stylingTypes}
          />
        </div>

        <div
          className="w-full h-[1px] my-2"
          style={{
            opacity: showArrow ? '0' : '1',
            backgroundColor: props.stylingTypes === 'heading' ? colors.Pink_300 : colors.Neutral_Surface,
          }}
        />

        <div className="w-full flex items-center justify-between">
          {!showArrow && (
            <>
              <TicketTime createTime={props.createTime} stylingTypes={props.stylingTypes} />
              <TicketSmallLabel stylingTypes={props.stylingTypes} state={props.state} rate={props.rate} />
            </>
          )}

          {showArrow && <TicketBigLabel stylingTypes={props.stylingTypes} state={props.state} />}
        </div>
      </div>
    </div>
  );
};

export default ClinicTicketGenerator;
