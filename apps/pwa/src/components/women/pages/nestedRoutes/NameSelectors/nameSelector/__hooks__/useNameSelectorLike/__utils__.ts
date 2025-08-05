import { IsLikedMakerTypes } from './types';

export const isLikedMaker: IsLikedMakerTypes = ({ card, data }) => {
  const copyData = { ...data };

  if (copyData) {
    // # 'all' data
    const allIndex = copyData.all.findIndex((item) => item.id === card.id);
    if (allIndex > -1) {
      copyData.all[allIndex].isLiked = !card.isLiked;
    }

    // # 'suggest' data
    const suggestIndex = copyData.suggest.findIndex((item) => item.id === card.id);
    if (suggestIndex > -1) {
      copyData.suggest[suggestIndex].isLiked = !card.isLiked;
    }

    // # 'favorite' data
    const favoritesIndex = copyData.favorites.findIndex((item) => item.id === card.id);
    if (favoritesIndex > -1) {
      copyData.favorites.splice(favoritesIndex, 1);
    } else {
      copyData.favorites.push({ ...card, isLiked: true });
    }
  }

  return copyData;
};
