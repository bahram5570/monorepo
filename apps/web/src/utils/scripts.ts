export const textShorter = (text: string, length?: number) => {
  const lengthNumber = length || 20;

  if (text?.length > lengthNumber) {
    return text?.slice(0, lengthNumber) + '...';
  }

  return text;
};
