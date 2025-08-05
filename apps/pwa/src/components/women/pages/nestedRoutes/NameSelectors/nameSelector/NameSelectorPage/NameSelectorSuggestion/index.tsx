import NameSelectorCard from '../../NameSelectorCard';
import useNameSelectorData from '../../__hooks__/useNameSelectorData';
import NameSelectorEmpty from '../NameSelectorEmpty';

const NameSelectorSuggestion = () => {
  const { data } = useNameSelectorData();

  const suggestData = data?.suggest;

  return (
    <div className="pb-6 pt-4 px-4 flex flex-col gap-3 max-h-[calc(100dvh_-220px_-46px)] overflow-auto hideScrollbar">
      {suggestData && (
        <>
          {suggestData.length === 0 && (
            <NameSelectorEmpty
              image="/assets/images/selectNameEmpty1.webp"
              txt1="با فیلترهایی که انتخاب کردی، نتیجه‌ای پیدا نشد."
              txt2="میتونی از بخش “همه نام‌ها” فیلترها رو عوض کنی تا نتیجه دلخواهت رو پیدا کنی"
            />
          )}

          {suggestData.length > 0 && suggestData.map((item, index) => <NameSelectorCard {...item} key={index} />)}
        </>
      )}
    </div>
  );
};

export default NameSelectorSuggestion;
