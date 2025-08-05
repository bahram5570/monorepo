export const addZero = (n: number | string) => {
  return ('0' + n).slice(-2);
};

export const colorFormatConverter = (color: string) => {
  return color.toLowerCase().replace('0xff', '#');
};

export const addComma = (no: string | number) => {
  return no.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const textShorter = (text: string, length?: number) => {
  const lengthNumber = length || 20;

  if (text?.length > lengthNumber) {
    return text?.slice(0, lengthNumber) + '...';
  }

  return text;
};
