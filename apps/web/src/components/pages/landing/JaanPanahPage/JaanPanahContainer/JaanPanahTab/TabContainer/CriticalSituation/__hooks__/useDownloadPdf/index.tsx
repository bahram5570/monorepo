import { HOST_URL } from '@constants/links.constants';

const useDownloadPdf = () => {
  const currentUrl = HOST_URL || '';
  const url = currentUrl + '/assets/file/برای روز مبادا.pdf';

  function downloadFileFromUrl() {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'برای روز مبادا.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return { downloadFileFromUrl };
};

export default useDownloadPdf;
