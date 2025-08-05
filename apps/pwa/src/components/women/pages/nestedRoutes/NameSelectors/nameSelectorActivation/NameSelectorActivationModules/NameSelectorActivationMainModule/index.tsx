import NameSelectorActivationProgressBar from '../NameSelectorActivationProgressBar';
import { NameSelectorActivationMainModuleProps } from './types';

const NameSelectorActivationMainModule = ({ children }: NameSelectorActivationMainModuleProps) => {
  return (
    <div className="w-full overflow-hidden px-4 pb-4 pt-14" style={{ direction: 'rtl' }}>
      <NameSelectorActivationProgressBar />

      <>{children}</>
    </div>
  );
};

export default NameSelectorActivationMainModule;
