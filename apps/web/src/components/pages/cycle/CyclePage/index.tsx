'use client';

import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import Spinner from '@components/ui/Spinner';

import CompleteCycleRegisterLoading from './CompleteCycleRegisterLoading';
import useRedirectToPwa from './__hooks__/useRedirectToPwa';

const targetUrl = PWA_LINK_WOMEN_URL;
const iframeUrl = `${targetUrl}/activationCr/goal_3`;

const CyclePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { redirectLink } = useRedirectToPwa(targetUrl);

  return (
    <>
      {isLoading && (
        <div
          style={{ backgroundColor: COLORS_LIST.White }}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center"
        >
          <Spinner size={40} />
        </div>
      )}

      {!redirectLink && (
        <iframe
          src={iframeUrl}
          onLoad={() => setIsLoading(false)}
          sandbox="allow-same-origin allow-scripts allow-popups"
          className="w-full h-[calc(100dvh_-80px)] pt-[56px] overflow-hidden"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      )}

      {redirectLink && <CompleteCycleRegisterLoading redirectLink={redirectLink} />}
    </>
  );
};

export default CyclePage;
