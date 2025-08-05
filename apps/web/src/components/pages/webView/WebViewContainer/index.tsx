import { WebViewContainerPropsType } from './type';

const WebViewContainer = ({ children }: WebViewContainerPropsType) => {
  return (
    <div className="max-w-[640px] mx-auto">
      <div className="flex flex-col gap-7 divide-y-2 p-6">{children}</div>
    </div>
  );
};

export default WebViewContainer;
