import dynamic from 'next/dynamic';

import { LottieCanvasTypes } from './types';

export const LottieCanvas = dynamic(
  () => import('@lottiefiles/dotlottie-react' as any).then((mod) => mod.DotLottieReact),
  {
    ssr: false,
  },
) as LottieCanvasTypes;
