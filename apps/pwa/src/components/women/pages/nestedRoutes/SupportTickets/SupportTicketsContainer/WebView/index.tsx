import { useState } from 'react';

import Spinner from '@components/ui/Spinner';

import { WebViewPropsType } from './type';

const WebView = ({ url }: WebViewPropsType) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ width: '100%', height: '100dvh' }}>
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full ">
          <Spinner width={50} color="primary" borderWidth={4} />
        </div>
      )}

      <iframe
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default WebView;
