'use client';

import useComponentColors from '../__utils__/useComponentColors';
import ArrowIcon from '@assets/icons/arrow.svg';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import Spinner from '../Spinner';
import { ButtonProps } from './types';
import useButtonSize from './useButtonSize';

function Button(props: ButtonProps) {
  const { sizeStyles } = useButtonSize({ size: props.size });
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const { colorStyles } = useComponentColors({
    contentsColor: props.color === 'FREE-STYLES' ? props.contentsColor : '',
    buttonColor: props.color === 'FREE-STYLES' ? props.buttonColor : '',
    variant: props.variant,
    color: props.color,
  });

  const isLoading = props.isLoading || pageNavigationLoading === props.navigationLoadingId;

  const clickHandler = () => {
    if (!props.isDisable && !isLoading) {
      props.onClick();

      if (props.navigationLoadingId) {
        pageNavigationHandler({ showProgressBar: false, id: props.navigationLoadingId });
      }
    }
  };

  let width: '100%' | 'fit-content' = '100%';
  switch (props.fullWidth) {
    case true:
      width = '100%';
      break;
    case false:
      width = 'fit-content';
      break;
    default:
      width = '100%';
      break;
  }

  return (
    <button
      onClick={clickHandler}
      data-testid={props.testId}
      style={{ ...colorStyles, ...sizeStyles, ...props.style, width }}
      className={`relative min-h-fit rounded-full border-2 px-4 overflow-hidden select-none ${props.isDisable && 'opacity-25'} 
        ${(isLoading || props.isDisable) && 'cursor-not-allowed'} ${props.className}
      `}
    >
      <div className={`w-full h-full flex justify-center gap-2 ${isLoading && 'opacity-0'}`}>
        <div className="flex justify-center items-center">{props.children}</div>
        {props.hasArrow && <ArrowIcon style={{ stroke: colorStyles.color }} className="w-6 h-auto stroke-2" />}
      </div>

      {isLoading && (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <Spinner width={24} color="FREE-STYLES" borderColor={colorStyles.color} />
        </div>
      )}
    </button>
  );
}

export default Button;
