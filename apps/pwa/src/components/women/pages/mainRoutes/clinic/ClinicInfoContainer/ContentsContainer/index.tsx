import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ActiveSpecialist from './ActiveSpecialist';
import SpecialistsList from './ActiveSpecialist/SpecialistsList';
import SpecialistCardGenerator from './SpecialistCardGenerator';
import SpecialistHint from './SpecialistHint';
import SpecialistPaymant from './SpecialistPaymant';
import SpecialistProblemInputs from './SpecialistProblemInputs';
import useQuestionValues from './SpecialistProblemInputs/__hooks__/useQuestionValues';
import useSelectSpecialist from './__hooks__/useSelectSpecialist';
import { SPECIALISTS_LIST_QUERY_NAME, SPECIALIST_PAYMENT_QUERY_NAME } from './constants';
import { ContentsContainerProps } from './types';

const ContentsContainer = ({ data }: ContentsContainerProps) => {
  const info = data.info;
  const dr = info.dr;

  const { selectedDoctor, selectedDoctorHandler } = useSelectSpecialist({ dr });
  const { questionValues, questionValuesHandler } = useQuestionValues();
  const { getQueryParams } = useQueryParamsHandler();

  const isSpecialistsListOpen = getQueryParams(SPECIALISTS_LIST_QUERY_NAME) !== null;
  const isPaymentOpen = getQueryParams(SPECIALIST_PAYMENT_QUERY_NAME) !== null;

  return (
    <div className="flex flex-col min-h-[100dvh] px-4" style={{ paddingTop: HEADER_HEIGHT + 20, paddingBottom: 16 }}>
      {isSpecialistsListOpen && (
        <SpecialistsList dr={dr} selectedId={selectedDoctor.id} selectedDoctorHandler={selectedDoctorHandler} />
      )}

      {!isSpecialistsListOpen && (
        <>
          <div className="flex flex-col gap-4 pb-6">
            <ActiveSpecialist isMoreThanOne={dr.length > 1} />

            <SpecialistCardGenerator
              selectedDoctorHandler={selectedDoctorHandler}
              nezamNumber={selectedDoctor.nezamNumber}
              speciliaty={selectedDoctor.speciliaty}
              firstName={selectedDoctor.firstName}
              isOnline={selectedDoctor.isOnline}
              lastName={selectedDoctor.lastName}
              rrCount={selectedDoctor.rrCount}
              minTime={selectedDoctor.minTime}
              selectedId={selectedDoctor.id}
              image={selectedDoctor.image}
              rate={selectedDoctor.rate}
              hasCommentsButton={true}
              id={selectedDoctor.id}
            />

            <SpecialistHint />
          </div>

          <SpecialistProblemInputs
            questionValuesHandler={questionValuesHandler}
            infoHelper={info.infoHelper}
            info={info.info}
          />

          {isPaymentOpen && questionValues && (
            <SpecialistPaymant
              type={data.type}
              price={info.price}
              submit={info.submit}
              support={info.support}
              id={selectedDoctor.id}
              payPrice={info.payPrice}
              priceUnit={info.priceUnit}
              image={selectedDoctor.image}
              questionValues={questionValues}
              currentValue={info.currentValue}
              isOnline={selectedDoctor.isOnline}
              discountPrice={info.discountPrice}
              lastName={selectedDoctor.lastName}
              firstName={selectedDoctor.firstName}
              speciliaty={selectedDoctor.speciliaty}
              nezamNumber={selectedDoctor.nezamNumber}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ContentsContainer;
