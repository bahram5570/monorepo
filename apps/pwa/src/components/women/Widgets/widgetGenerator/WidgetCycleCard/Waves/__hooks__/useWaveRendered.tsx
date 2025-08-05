import { useState } from 'react';

const useWaveRendered = () => {
  const [waveRendered, setWaveRendered] = useState(false);

  const waveRenderedHandler = (b: boolean) => {
    setWaveRendered(b);
  };

  return { waveRendered, waveRenderedHandler };
};

export default useWaveRendered;
