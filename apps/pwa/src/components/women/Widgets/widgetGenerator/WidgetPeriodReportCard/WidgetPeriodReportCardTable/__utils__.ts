export const percentFinder = (props: { value: number; min: number; max: number }) => {
  const totalPercent = props.max / 100;
  const currentPercent = (props.value - props.min) / totalPercent;
  const result = currentPercent > 100 ? 100 : currentPercent;
  return `${result}%`;
};
