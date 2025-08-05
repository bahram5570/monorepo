import { useEffect, useState } from 'react';

import { useScrollPropsType } from './type';

const useScroll = ({ ref }: useScrollPropsType) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (ref.current.scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    const modalContent = ref.current;
    if (modalContent) {
      modalContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (modalContent) {
        modalContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return { scrolled };
};

export default useScroll;
