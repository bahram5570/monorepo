import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import ContactUsForm from './ContactUsForm';
import ContactUsHeader from './ContactUsHeader';
import ContactUsInfo from './ContactUsInfo';

const ContactUsContainer = () => {
  return (
    <HeaderFooterContainer>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-7">
          <ContactUsHeader />
          <QrCode className="xl:top-[450px]" />
          <div className="grid md:grid-cols-2 grid-cols-1 columns-auto gap-5  p-4 md:px-40">
            <ContactUsForm />
            <ContactUsInfo />
          </div>
          <div className="w-full my-4">
            <DownloadApp />
          </div>
        </div>
      </div>
    </HeaderFooterContainer>
  );
};

export default ContactUsContainer;
