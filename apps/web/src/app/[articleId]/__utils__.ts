export const handleUpdateArticleId = (id: string) => {
  return id === 'what-is-biorhythm-and-how-does-it-affect-peoples-behavior' ? 'biorhythm' : id;
};

export const handleUpdateArticleBody = (body: string) => {
  return body.replaceAll('https://impo.app/wp-content', 'https://cover.impoapi.ir/wp-content');
};
