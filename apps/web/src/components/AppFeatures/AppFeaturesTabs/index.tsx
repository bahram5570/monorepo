import { APP_FEATURES_TABS_LIST } from '../constants';
import AppFeaturesTabGenerator from './AppFeaturesTabGenerator';
import { AppFeaturesTabsTypes } from './types';

const AppFeaturesTabs = ({ currentTab, currentTabHandler }: AppFeaturesTabsTypes) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-2 pb-4 lg:pb-8">
      {APP_FEATURES_TABS_LIST.map((item, index) => (
        <AppFeaturesTabGenerator
          key={index}
          tabIndex={index}
          title={item.title}
          currentTab={currentTab}
          currentTabHandler={currentTabHandler}
          lastIndex={APP_FEATURES_TABS_LIST.length - 1}
        />
      ))}
    </div>
  );
};

export default AppFeaturesTabs;
