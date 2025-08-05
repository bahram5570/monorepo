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

export const toEnglishNumbers = (number: number | string): string => {
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

export const addCommas = (n: number | string) => {
  return n.toLocaleString();
};

export const binarySeparator = (binaryValue: number) => {
  const separatedList: number[] = [];
  let power = 0;

  while (binaryValue > 0) {
    if (binaryValue & 1) {
      separatedList.push(2 ** power);
    }

    binaryValue = binaryValue >> 1;
    power++;
  }

  return separatedList;
};
