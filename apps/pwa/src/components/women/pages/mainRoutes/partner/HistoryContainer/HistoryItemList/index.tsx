import HistoryItem from './HistoryItem';
import { HistoryItemListPropsType } from './type';

const HistoryItemList = ({ lastExperienceRef, challengeData }: HistoryItemListPropsType) => {
  return (
    <div className="p-3 flex flex-col gap-3 mt-3  overflow-y-auto">
      {challengeData.items.map((item, index) => {
        return <HistoryItem key={index} {...item} />;
      })}

      <div ref={lastExperienceRef} className="h-10 w-full " />
    </div>
  );
};

export default HistoryItemList;
