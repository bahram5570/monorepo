'use client';

import useComponentButtonColors from '../__utils__/useComponentColors';
import ArrowIcon from '@assets/icons/arrow.svg';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import Spinner from '../Spinner';
import { BackButtonProps } from './types';

function BackButton(props: BackButtonProps) {
  const { colorStyles } = useComponentButtonColors({
    contentsColor: props.color === 'FREE-STYLES' ? props.contentsColor : '',
    buttonColor: props.color === 'FREE-STYLES' ? props.buttonColor : '',
    variant: props.variant,
    color: props.color,
  });

  const loadingId = 'BackButton';

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  function clickHandler() {
    if (!props.isDisable) {
      pageNavigationHandler({ linkTo: -1, showProgressBar: false, id: loadingId });
    }
  }

  const isLoading = props.isLoading || pageNavigationLoading === loadingId;

  return (
    <button
      onClick={clickHandler}
      data-testid={props.testId}
      style={{ backgroundColor: colorStyles.backgroundColor, borderColor: colorStyles.borderColor, ...props.style }}
      className={`w-12 h-12 border-2 rounded-full flex items-center justify-center  ${props.isDisable && 'opacity-25'} ${props.className}`}
    >
      {!isLoading && <ArrowIcon className="w-6 h-auto m-auto stroke-2" style={{ stroke: colorStyles.color }} />}

      {isLoading && <Spinner color="FREE-STYLES" borderColor={colorStyles.color} />}
    </button>
  );
}

export default BackButton;
