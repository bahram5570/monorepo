import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import PaymentHeaderSection from './PaymentHeaderSection';
import PaymentStepPay from './PaymentStepPay';
import PaymentWhatsAppNumberContainer from './PaymentWhatsAppNumberContainer';

const PaymentContainer = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col gap-5">
        <PaymentHeaderSection />
        <QrCode className="lg:top-[600px] xl:top-[730px]" />
        <div className="w-full md:w-11/12 lg:w-10/12 px-4 md:px-0 my-4 mx-auto   items-center mb-24">
          <PaymentStepPay />
        </div>
        {/* <PaymentFormSection /> */}
        <PaymentWhatsAppNumberContainer />
      </div>
    </HeaderFooterContainer>
  );
};

export default PaymentContainer;
