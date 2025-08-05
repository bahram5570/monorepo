import TabContainer from './TabContainer';
import { MarhaamTabPropsType } from './type';

const MarhaamTab = ({ result }: MarhaamTabPropsType) => {
  return (
    <div className=" px-4 md:px-0 mt-auto   w-full  my-5">
      <TabContainer result={result} />
    </div>
  );
};

export default MarhaamTab;
