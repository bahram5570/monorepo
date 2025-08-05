import { createPortal } from 'react-dom';

import { MAX_SCREEN_WIDTH, PORTAL_ID } from '@constants/app.constants';
import useIsRendered from '@hooks/useIsRendered';

import Spinner from '../Spinner';

const Loading = () => {
  const { isRendered } = useIsRendered();

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div
          className="fixed top-0 left-0 right-0 bottom-0 mx-auto flex justify-center pt-[30dvh] z-[70]"
          style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: '#000000AA' }}
        >
          <Spinner color="surface" width={50} borderWidth={4} />
        </div>,
        document.getElementById(PORTAL_ID) as Element,
      )}
    </>
  );
};

export default Loading;
