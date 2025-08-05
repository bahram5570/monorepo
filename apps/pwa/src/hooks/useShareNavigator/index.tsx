import { ShareHandlerType } from './type';

const useShareNavigator = () => {
  const handleShare: ShareHandlerType = async (message) => {
    if ('serviceWorker' in navigator) {
      if (navigator.share) {
        try {
          await navigator.share({
            text: message,
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  return { handleShare };
};

export default useShareNavigator;
