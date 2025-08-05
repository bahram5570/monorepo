export const parseFormattedText = (text: string): string => {
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, (_, p1) => `<strong><em>${p1}</em></strong>`);

  text = text.replace(/\*\*(.+?)\*\*/g, (_, p1) => `<strong>${p1}</strong>`);
  text = text.replace(/\*(.+?)\*/g, (_, p1) => `<em>${p1}</em>`);

  return text;
};
