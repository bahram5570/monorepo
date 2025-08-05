import { useEffect, useState } from 'react';

const usePageHeight = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const he = document.documentElement.clientHeight;
    setPageHeight(he);
  }, []);

  return { pageHeight };
};

export default usePageHeight;
