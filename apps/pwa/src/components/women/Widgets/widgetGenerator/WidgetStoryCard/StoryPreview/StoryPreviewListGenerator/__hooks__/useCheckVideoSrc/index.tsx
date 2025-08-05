import useOperatingSystem from '@hooks/useOperatingSystem';

const useCheckVideoSrc = () => {
  const { operatingSystem } = useOperatingSystem();
  const checkFormatVideo = (src: string) => {
    if (operatingSystem === 'ios') {
      const splitSrc = src.split('.');
      const srcIncludedWebm = splitSrc.includes('webm');
      if (srcIncludedWebm) {
        src = src.replaceAll('.webm', '.mp4');
      }
    }

    return src;
  };

  return { checkFormatVideo };
};

export default useCheckVideoSrc;
