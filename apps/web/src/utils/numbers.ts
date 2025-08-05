export const toPersianNumbers = (number: number | string): string => {
  const persianNumbers: { [key: string]: string } = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
  };

  return number.toString().replace(/[0-9]/g, (w) => {
    return persianNumbers[w];
  });
};

export const toEnglishNumbers = (number: string | number) => {
  const englishNumbers: { [key: string]: string } = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };
  return number.toString().replace(/[۰-۹]/g, (w) => {
    return englishNumbers[w];
  });
};

export const addComma = (no: string | number) => {
  return no.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const addZero = (n: number | string) => {
  return ('0' + n).slice(-2);
};
