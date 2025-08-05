import { IndexToBinaryTypes } from './types';

export const toBinary = (no: number) => {
  return Math.pow(2, no);
};

export const binaryMaker = (value: number) => {
  const zeroOne = value.toString(2).padStart(50, '0');
  const binaryArray = zeroOne.split('').reverse();
  const selectedIndexList: number[] = [];

  binaryArray.forEach((item, index) => {
    if (item === '1') {
      selectedIndexList.push(index);
    }
  });

  return { binaryArray, selectedIndexList };
};

export const indexToBinary: IndexToBinaryTypes = ({ binaryArray, selectedIndex }) => {
  let binaryList = [...binaryArray];
  binaryList[selectedIndex] = binaryList[selectedIndex] === '1' ? '0' : '1';
  binaryList = binaryList.reverse();
  return parseInt(binaryList.join(''), 2);
};
