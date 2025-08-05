export const formatPersionDate = (date: Date) => {
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (isToday) {
    return `${date.getHours()}:${date.getMinutes()} امروز`;
  }
  return `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString('fa-IR', { weekday: 'long' })}`;
};
