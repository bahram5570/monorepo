import NameSelectorCard from '../../NameSelectorCard';
import useNameSelectorData from '../../__hooks__/useNameSelectorData';
import NameSelectorEmpty from '../NameSelectorEmpty';
import useNameSelectorFetchFavorites from './__hooks__/useNameSelectorFetchFavorites';

const NameSelectorFavorites = () => {
  const { data } = useNameSelectorData();
  const { paginationHandler, isLoading } = useNameSelectorFetchFavorites();

  const favoritesData = data?.favorites;

  return (
    <div className="pb-6 pt-4 px-4 flex flex-col gap-3 max-h-[calc(100dvh_-220px_-46px)] overflow-auto hideScrollbar">
      {favoritesData && (
        <>
          {favoritesData.length === 0 && (
            <NameSelectorEmpty
              image="/assets/images/selectNameEmpty2.webp"
              txt1="اینجا اسم‌هایی که تو بپسندی نشون میدیم."
              txt2="دلیل خالی بودنش اینه که هیچ کدوم از اسم‌ها رو لایک نکردی"
            />
          )}

          {favoritesData.length > 0 &&
            favoritesData.map((item, index) => {
              const isLastIndex = index === favoritesData.length - 1;

              return (
                <NameSelectorCard
                  {...item}
                  key={index}
                  isLoading={isLoading}
                  isLastIndex={isLastIndex}
                  startingLetter={undefined}
                  onPagination={paginationHandler}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default NameSelectorFavorites;
