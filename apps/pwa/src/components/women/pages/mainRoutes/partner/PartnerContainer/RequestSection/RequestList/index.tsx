import RequestGenerator from './RequestGenerator';
import { RequestListPropsType } from './type';

//
const RequestList = ({ data }: RequestListPropsType) => {
  return (
    <div className="divide-y">
      {data.list.map((part, index) => (
        <RequestGenerator item={part} key={index} />
      ))}
    </div>
  );
};

export default RequestList;
