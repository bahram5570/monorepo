import MemoryItem from './MemoryItem';
import { MemoryListPropsType } from './type';

const MemoryList = ({ memories, isFetchingNextPage }: MemoryListPropsType) => {
  return (
    <div>
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="divide-y-2">
            <MemoryItem {...memory} currentPage={0} />
          </div>
        );
      })}
      <div ref={isFetchingNextPage} className="h-10 w-full " />
    </div>
  );
};

export default MemoryList;
