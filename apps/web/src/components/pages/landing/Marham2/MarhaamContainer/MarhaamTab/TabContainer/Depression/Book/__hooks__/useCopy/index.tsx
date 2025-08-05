import useCustomToast from '@hooks/useCustomToast';

const useCopy = () => {
  const discountCode = 'Marham';
  const { onToast } = useCustomToast();
  const copylink = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(discountCode);

        onToast({ type: 'success', message: 'کد تخفیف کپی شد' });
      } catch (err) {
        console.error(err);
        onToast({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    } else {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = discountCode;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        if (successful) {
          onToast({ type: 'success', message: 'کد تخفیف کپی شد' });
        } else {
          throw new Error('Fallback copy failed');
        }
        document.body.removeChild(textArea);
      } catch (err) {
        console.error('Fallback error: ', err);
        onToast({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    }
  };

  return { copylink };
};

export default useCopy;
